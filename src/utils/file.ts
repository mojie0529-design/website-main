// 封装文件转 base64 格式方法
export const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            resolve(e?.target?.result as string);
        };
        fileReader.readAsDataURL(file); // file 或 raw
        fileReader.onerror = () => {
            reject(new Error('文件流异常'));
        };
    })
}

/**加载图片 */
export const loadImg = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            resolve(img)
        }
        img.onerror = (err) => {
            reject(err);
        }
    })

}

export const preloadImgs = (imgs: string[]) => {
  return Promise.all(imgs.map(img => {
    return new Promise((resolve) => {
      // 直接resolve，不实际预加载
      resolve(null);
      
      /* 注释掉会出错的实际预加载
      const image = new Image();
      image.src = img;
      image.onload = resolve;
      image.onerror = resolve; // 即使出错也resolve
      */
    });
  }));
}