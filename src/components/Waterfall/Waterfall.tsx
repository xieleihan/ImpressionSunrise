import { useState, useEffect, useRef } from 'react';
import './Waterfall.scss';

/**
 * 媒体元素
 * @param src 媒体资源链接
 * @param type 媒体类型（图片或视频）
 * @param poster 视频封面（如果是视频）
 * @param alt 图片或视频的描述
 */
interface MediaItem {
    src: string; // 媒体资源链接
    type: 'image' | 'video'; // 媒体类型
    poster?: string; // 视频封面
    alt?: string; // 图片或视频的描述
}

/**
 * 传递参数
 * @param classNames 自定义类名
 * @param columns 列数  
 * @param gap 列间距    
 * @param children 子元素
 * @param data 数据源(可以是图片链接、视频链接)
 */
export interface WaterfallProps {
    classNames?: string; // 自定义类名
    columns?: number; // 列数
    gap?: number; // 列间距
    children?: React.ReactNode; // 子元素
    data: MediaItem[]; // 数据源(可以是图片链接、视频链接)
}

function Waterfall({
    classNames = '',
    columns = 3,
    gap = 10,
    children,
    data
}: WaterfallProps
) {
    const [columnsData, setColumnsData] = useState<MediaItem[][]>([]); // 数据源
    const [randomHeights, setRandomHeights] = useState<{ [key: string]: number }>({}); // 随机高度
    const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({}); // 已加载的图片状态
    const imgRefs = useRef<Map<string, HTMLImageElement>>(new Map()); // 用于存储图片引用
    const observer = useRef<IntersectionObserver | null>(null); // 观察器

    function randomHeight(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        const cols: MediaItem[][] = Array.from({ length: columns }, () => []);
        const heights: { [key: string]: number } = {};
        data.forEach((item, index) => { // 移除了async关键字，因为函数内没有await
            cols[index % columns].push(item);
            heights[item.src] = randomHeight(150, 480);
        });
        setColumnsData(cols);
        setRandomHeights(heights);
    }, [data, columns]);

    // 创建观察
    useEffect(() => {
        if (typeof window !== 'undefined') {
            observer.current = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target as HTMLImageElement;
                        const itemKey = img.dataset.key;
                        if (itemKey) {
                            // 获取对应的图片项
                            const itemIndex = parseInt(img.dataset.index || '0');
                            const colIndex = parseInt(img.dataset.col || '0');
                            const item = columnsData[colIndex]?.[itemIndex];
                            if (item) {
                                img.src = item.src; // 设置真实的图片源
                                observer.current?.unobserve(img);
                            }
                        }
                    }
                });
            }, {
                rootMargin: '300px', // 提前300px开始加载
                threshold: 0
            });
        }

        return () => {
            observer.current?.disconnect();
        };
    }, [data, columnsData]);

    // 观察图片加载
    useEffect(() => {
        imgRefs.current.forEach((img: HTMLImageElement) => {
            observer.current?.observe(img);
        });

        return () => {
            imgRefs.current.forEach((img: HTMLImageElement) => {
                observer.current?.unobserve(img);
            });
        };
    }, [columnsData]);

    return (
        <div className={`waterfall ${classNames}`} style={{ display: 'flex', gap: `${gap}px` }}>
            {columnsData.map((col, colIndex) => (
                <div key={colIndex} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: `${gap}px` }}>
                    {col.map((item, index) => {
                        const itemKey = `${colIndex}-${index}`;
                        const itemHeight = randomHeights[item.src] || 200;
                        if (item.type === 'image') {
                            return (
                                <div key={itemKey} style={{ position: 'relative', height: itemHeight }}>
                                    {!loadedImages[itemKey] && (
                                        <div className="skeleton" style={{ height: itemHeight }} />
                                    )}
                                    <img
                                        ref={(el) => {
                                            if (el) {
                                                // 设置数据属性用于在观察器中识别
                                                el.dataset.key = itemKey;
                                                el.dataset.index = index.toString();
                                                el.dataset.col = colIndex.toString();
                                                imgRefs.current.set(itemKey, el);
                                            } else {
                                                imgRefs.current.delete(itemKey);
                                            }
                                        }}
                                        alt={item.alt || 'Image'}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: itemHeight,
                                            objectFit: 'cover',
                                            opacity: loadedImages[itemKey] ? 1 : 0,
                                            transition: 'opacity 0.4s ease',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0
                                        }}
                                        className="img"
                                        onLoad={() => setLoadedImages(prev => ({ ...prev, [itemKey]: true }))}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <video
                                    key={itemKey}
                                    src={item.src}
                                    poster={item.poster}
                                    controls
                                    style={{ width: '100%', height: 'auto' }}
                                    className="video"
                                />
                            );
                        }
                    })}
                </div>
            ))}
            {children}
        </div>
    );
}

export default Waterfall;