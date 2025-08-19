import { useState, useEffect } from 'react';
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
    const [columnsData, setColumnsData] = useState<MediaItem[][]>([]);

    useEffect(() => {
        const cols: MediaItem[][] = Array.from({ length: columns }, () => []);
        data.forEach((item, index) => {
            cols[index % columns].push(item);
        });
        setColumnsData(cols);
    }, [data, columns]);

    return (
        <>
            <div
                className={`waterfall ${classNames}`}
                style={{ display: 'flex', gap: `${gap}px` }}
            >
                {columnsData.map((col, colIndex) => (
                    <div
                        key={colIndex}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: `${gap}px` }}
                    >
                        {col.map((item, index) => (
                            item.type === 'image' ? (
                                <img
                                    key={index}
                                    src={item.src}
                                    alt={item.alt || 'Image'}
                                    loading='lazy'
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            ) : (
                                <video
                                    key={index}
                                    src={item.src}
                                    poster={item.poster}
                                    controls
                                        style={{ width: '100%', height: 'auto' }}
                                />
                            )
                        ))}
                    </div>
                ))}
                {children}
            </div>
        </>
    );
}

export default Waterfall;