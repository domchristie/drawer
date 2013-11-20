(function() {
  var clickType = ('ontouchstart' in document.documentElement ||
    window.navigator.msPointerEnabled) ? 'touchstart' : 'click';
  
  $(document).on(clickType, '[data-drawer-toggle]', function(evt) {
    evt.preventDefault();
    $('body').toggleClass('drawer-open');
  });
})()