(function() {
  var classNames = [],
      root = document.documentElement;

  // Match iOS Safari version number
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var ios = (navigator.appVersion).match(/OS ([\d\_]+)+/);
    classNames.push('ios-safari-' + ios[1].replace(/_/g, '-'));
  }

  // Match Android version number
  var ua = navigator.userAgent.toLowerCase(),
      android = ua.toLowerCase().match(/android ([\d\.]+)+/);
  if(android) {
    classNames.push(android[0].replace(/[ \.]/g, '-'));
  }

  root.className += (root.className ? ' ' : '') + classNames.join(' ');
})();