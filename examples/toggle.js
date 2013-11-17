(function() {
  $(document).on('click touchstart', '[data-drawer-toggle]', function(evt) {
    evt.preventDefault();
    $('body').toggleClass('drawer-open');
  });
})()