import "../css/main.css";
import "../css/gallery.css";

import GallerySwiper from './components/gallerySwiper'
import Search from '../vue/search';

document.addEventListener('DOMContentLoaded', () => {
	new Search('#search')
	let el = document.querySelector("#swiper")
	if (el){
		let swiper = new GallerySwiper('#swiper','.gallery',{
		loop: true,
		direction: 'horizontal',
		navigation: {
	    	nextEl: '.btnr',
	    	prevEl: '.btnl',
	  		}
		})
	}
})
