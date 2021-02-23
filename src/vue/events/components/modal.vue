<template lang="pug">
.calendar_day_modal
	.calendar_day_modal_content
		a.calendar_day_modal_closer
			svg.calendar_closer
				use(href= "/assets/icons/icons.svg#closer")
		h3.calendar_event_date event.date
		p.calendar_event_place event.place
		p.calendar_event_name events.name
		p.calendar_event_type event.type
		p.calendar_event_description event.description
		.calendar_modal_button_container
			a.btn_border Записаться
</template>

<script>
export default {
	data(){
		return {}
	},
	props: {
		 event: Object
	},
}
</script>