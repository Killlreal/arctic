import Cookies from "js-cookie";

export default class Translator{
	constructor(){
		this.googleTranslateConfig = {
		    lang: "ru",
		    domain: "1mcg.ru"
		}

		let script = document.createElement('script');
		script.id = 'container'
		window.onloadCallback = this.translateInit
		script.src = '//translate.google.com/translate_a/element.js?cb=onloadCallback';
		document.body.appendChild(script);
	}

	translateInit = () => {
		let code = this.getCode();

    	if (document.querySelector('[data-google-lang="' + code + '"]') !== null) {
        	document.querySelector('[data-google-lang="' + code + '"]').classList.add('active');
    	}

    	if (code == this.googleTranslateConfig.lang) {
			Cookies.remove('googtrans')
    	}

    	new google.translate.TranslateElement({
        	pageLanguage: this.googleTranslateConfig.lang,
    	});

    	this.eventHandler('click', '[data-google-lang]', (e) => {
        	this.storageHandler("/" + this.googleTranslateConfig.lang + "/" + e.getAttribute("data-google-lang"), this.googleTranslateConfig.domain);
        	window.location.reload()
    	});
	}

	getCode = () => {
		let lang = (Cookies.get('googtrans') != undefined && Cookies.get('googtrans') != "null") ? Cookies.get('googtrans') : this.googleTranslateConfig.lang;
		return lang.match(/(?!^\/)[^\/]*$/gm)[0];
	}

	storageHandler = (val, domain) => {
		Cookies.remove('googtrans')
	    Cookies.set('googtrans', val, { domain: domain });
	}

	eventHandler = (event, selector, handler) => {
		document.addEventListener(event, function (e) {
        	let el = e.target.closest(selector);
        	if (el) handler(el);
    	});
	}
}