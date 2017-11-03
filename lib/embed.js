/**
 * Where all files in the build folder are hosted
 * Hint: run $ export WIDGET_HOST="<<HOST>>"
 * To set it temporarily
 */
var host = process.env.WIDGET_HOST;

window.addEventListener('load', function() {
  var styles = document.createElement('link');
  styles.rel = 'stylesheet';
  styles.href = host + '/widget.css';
  document.head.appendChild(styles);
  var script = document.createElement('script');
  script.async = true;
  script.src = host + '/widget.js';
  document.body.appendChild(script);
}, false);
