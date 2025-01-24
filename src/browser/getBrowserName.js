// 获取浏览器名称
export default function getBrowserName() {
  const userAgent = window.navigator.userAgent;
  const browsers = {
    chrome: /chrome/i,
    safari: /safari/i,
    firefox: /firefox/i,
    ie: /internet explorer/i,
    edge: /edge/i,
    opera: /opera|opr/i,
    yandex: /yandex/i,
    uc: /ucbrowser/i,
    samsung: /samsungbrowser/i,
    maxthon: /maxthon/i,
    phantomjs: /phantomjs/i,
    crios: /crios/i,
    firefoxios: /fxios/i,
    edgios: /edgios/i,
    safariios: /safari/i,
    android: /android/i,
    ios: /(iphone|ipad|ipod)/i,
    unknown: /unknown/i,
  };

  for (const key in browsers) {
    if (browsers[key].test(userAgent)) {
      return key;
    }
  }
  return 'unknown';
}
