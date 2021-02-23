import initAccessibility from '../components/accessibility';
import Search from '../../vue/search';
import Translator from '../components/gTranslate.js'

export default function initApp(){
	initAccessibility()
	new Search('#search')
	new Translator()
}


