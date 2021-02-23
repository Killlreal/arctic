<template lang="pug">
.calendar_day_minscreen
	p.calendar_day_event_name_minscreen 
	p.calendar_day_event_description_minscreen
	a.calendar_day_event_link_minscreen(href='#')
	svg.social_spaces_items_one_link_arrow
		use(href='/assets/icons/icons.svg#right_arrow')
</template>

<script>
export default {
	data(){
		return {}
	}
}
</script>