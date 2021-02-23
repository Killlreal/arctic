import ky from 'ky'
import Noty from 'noty'

export default class GreCaptcha{
	constructor(target){
		let send = document.querySelector(target)
		if (!send) return
		let script = document.createElement('script');
		window.onloadCallback = this.onLoad
		script.id = 'container'
		script.src = '//www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
		send.onclick = this.sendCaptcha
	}

	onLoad = () => {
		let widget = grecaptcha.render('widget', {
		  'sitekey' : '6LdHKN0ZAAAAAGpwc4zPS_UEMbpbL3ZSVoNgsPNo',
		  'theme' : 'light'
		});
	}

	sendCaptcha = async () => {
		let response = await ky.post('/api/feedback/questions',{ json: {
				name: document.querySelector('#name-surname').value,
				emails: [
					document.querySelector('#e-mail').value
				],
				message: document.querySelector('#comment').value,
				i_agree: true,
				grecaptchaToken: grecaptcha.getResponse()
			}
		})
		if (response.ok) {
			new Noty({
                type: 'info',
                progressBar: true,
                timeout: 3500,
                theme: 'nest',
                layout: 'topRight',
                text: 'Форма успешно отправлена'
            }).show();
            document.querySelector('#name-surname').value = ""
      		emails: document.querySelector('#e-mail').value = ""
			message: document.querySelector('#comment').value = ""
		}
	}
}