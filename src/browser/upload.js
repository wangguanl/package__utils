/* 
	上传文件
 	uploadFile(file.file).then(res => {});
*/
export function uploadFile(uploadUrl, file) {
  return new Promise((resolve, reject) => {
    var fileBuffer = new FormData();

    fileBuffer.append('', file);

    var xhr = new XMLHttpRequest();

    //设置请求的类型及url
    xhr.open('post', uploadUrl, true);

    //发送请求
    xhr.send(fileBuffer);

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var res = JSON.parse(
          xhr.responseText.replace(/\\/g, '/').replace(/\/\//g, '/')
        );
        resolve(res);
      }
    };
  }).catch(() => {
    reject();
  });
}
