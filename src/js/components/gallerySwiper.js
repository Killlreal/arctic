import "../../css/components/swipers.css"
import Swiper from 'swiper'

export default class GallerySwiper{
	constructor(target, imgClass, params = null){
		this.config = {
			pagination: params?.pagination || false,
			loop: params?.loop || false,
			navigation: params?.navigation || false,
			direction: params?.direction || 'horizontal',
		}

		let fullscreenImgClass = params?.fullscreenImgClass || 'gallery-img'

		this.nav = ``
		this.pag = ``
		this.scr = ``

		this.target = target

		if (this.config.navigation){
			this.nav =`<div class="${this.config.navigation.prevEl.replace('.','')}"></div>
			<div class="${this.config.navigation.nextEl.replace('.','')}"></div>`
		}
		if (this.config.pagination){
			this.pag = `<div class="gallery-swiper-pagination"></div>`
		}
		if (this.config.scrollbar){
			this.scr = `<div class="gallery-swiper-scrollbar"></div>`
		}

		this.template = `
		<div id = "gallery-swiper" class="swiper-container">
			<div class="swiper-wrapper"></div>${this.nav}${this.pag}${this.scr}</div>`

		const images = document.querySelectorAll(imgClass)
		this.array = []

		images.forEach((val,index) => val.onclick = () => {
			this.open(index);
		});

		images.forEach(val => {
			this.array.push(`<div class="swiper-slide"><img class = "${fullscreenImgClass}" src="${val.src}"></div>`)
		})
	}

	open = index => {
		document.querySelector(this.target).outerHTML = this.template
		this.swiper = new Swiper('#gallery-swiper',this.config)
		//document.getElementById('gallery-swiper').style.top = `${window.pageYOffset}px`
		document.addEventListener("click", this.outside)
		this.swiper.appendSlide(this.array)
		this.swiper.activeIndex = index+1
		this.swiper.update()
	}

	outside = event => {
	 	let inside = true
	 	let touches = document.querySelectorAll('.gallery, .btnl, .btnr')
	 	touches.forEach(val => {
		    if (val.contains(event.target)) {
		       	inside = false;
		    }
		})
	    if (inside){
	    	this.swiper.destroy()
	    	document.querySelector('#gallery-swiper').outerHTML = `<div id ="${this.target.replace('#','')}"></div>`
	    	document.removeEventListener('click', this.outside)
	    }
	}
}
