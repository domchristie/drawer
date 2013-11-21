(function() {
  var isTouch = 'ontouchstart' in document.documentElement ||
    window.navigator.msPointerEnabled;
  
  $(document).on('touchstart click', '[data-drawer-toggle]', function(evt) {
    evt.preventDefault();
    if(isTouch && evt.type === 'click') return;

    $('html').toggleClass('drawer-open');
    $('.drawer-butt').trigger('transitionstart');
  });

  $(document).on('transitionend', '.drawer-butt', function() {
    if(!drawerOpen()) {
      $('.drawer').each(function(i, el) {
        el.style.webkitOverflowScrolling = null;
      });
      $('body').focus();
      $(this).off('touchmove.drawer')
    }
  });

  $(document).on('transitionstart', '.drawer-butt', function() {
    if(drawerOpen()) {
      $('.drawer').each(function(i, el) {
        el.style.webkitOverflowScrolling = 'touch';
      }).focus();
      $(this).on('touchmove.drawer', function(evt) { return false; });
    }
  });

  function drawerOpen() {
    return !!$('.drawer-open').length;
  }
 })()