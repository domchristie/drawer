(function() {
  var isTouch = 'ontouchstart' in document.documentElement ||
    window.navigator.msPointerEnabled;
  
  $(document).on('touchstart click', '[data-drawer-toggle]', function(evt) {
    evt.preventDefault();
    if(isTouch && evt.type === 'click') return;

    $('html').toggleClass('drawer-open');
  });
})()