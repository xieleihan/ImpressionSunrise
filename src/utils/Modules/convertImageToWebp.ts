/**
 * 将图片文件转换为 WebP 格式
 * @param {File} file - 需要转换的图片文件
 * @returns {Promise<Blob>} - 返回 WebP 格式的 Blob 对象
 */
export function convertImageToWebp(file: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
        // 判断是否是图片格式
        if (!file.type.startsWith('image/')) {
            reject(new Error('文件不是图片格式'));
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
            const img = new Image();
            if (typeof reader.result === 'string') {
                img.src = reader.result;
            } else {
                reject(new Error('文件读取结果不是有效的图片数据'));
                return;
            }

            img.onload = async () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(img, 0, 0);

                    // 转换为 WebP 格式 (质量 0.8 ~ 1.0)
                    canvas.toBlob(
                        (blob) => {
                            if (blob) {
                                resolve(blob);
                            } else {
                                reject(new Error('转换失败'));
                            }
                        },
                        'image/webp',
                        1 // 保持高质量，同时尽量压缩体积
                    );
                } else {
                    reject(new Error('无法获取 Canvas 2D 上下文'));
                }
            };

            img.onerror = () => reject(new Error('图片加载失败'));
        };

        reader.onerror = () => reject(new Error('文件读取失败'));
    });
}