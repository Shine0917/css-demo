(function(doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
      recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if (clientWidth >= 750) {
              docEl.style.fontSize = '100px'; //设置font-size 为100px，所以根据设计稿直接除以100，得到rem
          } else {
              docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
          }
      };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);