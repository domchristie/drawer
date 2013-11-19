(function() {
  var clickType = document.ontouchstart !== null ? 'click' : 'touchstart';
  $(document).on(clickType, '[data-drawer-toggle]', function(evt) {
    evt.preventDefault();
    $('body').toggleClass('drawer-open');
  });
})()