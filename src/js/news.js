import "../css/main.css";
import "../css/news.css";
// import initMap from './components/map';
// // import initAccessibility from './components/accessibility';

import News from '../vue/news';
import Search from '../vue/search';

document.addEventListener('DOMContentLoaded', () => {
	new Search('#search')
	if (document.querySelector('#news')) new News('#news')
	cackle_widget = window.cackle_widget || [];
	cackle_widget.push({widget: 'Comment', id: 75503});
	(function() {
	    var mc = document.createElement('script');
	    mc.type = 'text/javascript';
	    mc.async = true;
	    mc.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cackle.me/widget.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
	})();
});