// 监听元素是否显示隐藏
function ObserveElVisible(el, show, hide) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        show?.();
        console.log('已显示');
      } else if (entry.intersectionRatio <= 0) {
        hide?.();
        console.log('已隐藏');
      }
    });
  }, {});
  observer.observe(el);
}
