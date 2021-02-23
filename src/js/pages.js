import "../css/main.css";
import "../css/contacts.css";
import "../css/about_us.css";
import "../css/arcticjournaling.css";
import "../css/events.css";
import "../css/social_places.css";
import "../css/arctic_journey.css";
import "../css/volunteering.css";
import "../css/shop.css";

import initMap from './components/map';
import Lightbox from './components/lightbox_modal';
import initCalendarModal from './components/calendar';
import GreCaptcha from './components/greCaptcha';
import Events from '../vue/events';
import Search from '../vue/search';

document.addEventListener('DOMContentLoaded', () => {
	new Search('#search')
	let box = new Lightbox()
	if (document.querySelector("#map")) initMap();
	if (document.querySelector('#events')) new Events('#events')
	let captcha = new GreCaptcha('#send_feedback')
})
