import './Loading.scss';

export interface LoadingProps{
    colorArray?: string[]; // 颜色数组,只能有四个颜色
    size?: number; // 大小
    className?: string; // 自定义类名
    tip?: string; // 提示文本
    LoadingType?: 'default' | 'circle' | 'spin'; // 加载类型
}

function Loading({
    colorArray = ['$monet-flower-red-1', '$monet-sunset-orange-1', '$monet-sky-blue-1','$monet-leaf-green-1'],
    size = 50,
    className = '',
    tip = 'Loading...',
    LoadingType = 'default'
}: LoadingProps
) {
    return (
        <>
            <div >
                <div className={`loading ${LoadingType} ${className}`} style={{ width: `${size}px`, height: `${size}px` }}>
                    {LoadingType === 'default' && (
                        <div className="default-spinner">
                            {colorArray.map((color, index) => (
                                <div key={index} className="spinner-circle" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>
                    )}
                    {LoadingType === 'circle' && (
                        <div className="circle-spinner" style={{ borderColor: colorArray[0] }}></div>
                    )}
                    {LoadingType === 'spin' && (
                        <div className="spin-spinner"></div>
                    )}
                </div>
                {tip && <p className="loading-tip">{tip}</p>}
            </div>
        </>
    );
}

export default Loading;