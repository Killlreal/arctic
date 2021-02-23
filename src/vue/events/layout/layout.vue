<template lang="pug">
.wrapper
    Modal(v-if="modalShow")
    section.calendar
        .calendar_headline
            h2.h2_headline Ближайшие мероприятия
        .calendar_container
            .calendar_hat
                svg.calendar_arrow(@click="prev")
                    use(href = "/assets/icons/icons.svg#back_arrow")
                p.calendar_inactive_month {{monthsOfYear[(month+11) % 12]+' '+year}}
                p.calendar_active_month {{monthsOfYear[month]+' '+year}}
                p.calendar_inactive_month {{monthsOfYear[(month+1) % 12]+' '+year}}
                svg.calendar_arrow(@click="nextq")
                    use(href = "/assets/icons/icons.svg#forward_arrow")
            .calendar_days_hat
                .calendar_day_name(v-for="day in daysOfWeek")
                    p.calendar_day_name_text {{ day }}
            .calendar_days_body
                a.calendar_day(v-if="loaded" v-for="i in (days[0].day() + 6) % 7")
                a.calendar_day(v-if="loaded" href = '#' v-for="day in days")
                    p.calendar_day_number {{ day.format('D') }}
                    p.calendar_day_event
                a.calendar_day(v-if="loaded" v-for="i in (days[0].day() + 6) % 7")
            //- .calendar_days_body_miniscreens
            //-     MiniScreen
    section.passed_events_wrapper
        div.passed_events_headline 
            h2.h2_headline Прошедшие мероприятия
        v-select(v-model="date_select_model"
                :options="date_options"
                @input="filter_date")
        .passed_events_item_wrapper(v-for="(event,index) in events")
            .passed_events_item_left(v-if= "index % 2 === 0")
                .passed_events_item_img
                    img(:src = "event.picture")
                .passed_events_item_text
                    p.passed_events_item_type Мастер-класс
                    h3.passed_events_item_headline {{ event.title }}
                    p.passed_events_item_preview {{ event.announce }}
                    a.btn_border(:href="event.pageRef") Подробнее
            .passed_events_item_right(v-else)
                .passed_events_item_text
                    p.passed_events_item_type Мастер-класс
                    h3.passed_events_item_headline {{ event.title }}
                    p.passed_events_item_preview {{ event.announce }}
                    a.btn_border(:href="event.pageRef") Подробнее
                .passed_events_item_img
                    img(:src = "event.picture")
        a.news_btn(v-if="next" @click="load") Показать еще

</template>

<script>
import ky from 'ky';
import Modal from '../components/modal.vue'
import MiniScreen from '../components/miniscreen.vue'
import moment from "moment";

export default {
    components: {
        Modal,
        MiniScreen
    },
    data() {
        return {
            date_select_model: "Все",
            events: [],
            daysOfWeek: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"],
            monthsOfYear: [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            next: null,
            origin: location.origin+"/api/news/lines?cid=2a746b3ec5cbc902a82727662f0823ad&limit=4",
            modalShow: false,
            days: [],
            monthDate: null,
            year: null,
            loaded: false
        };
    },
    computed: {
        date_options(){
            let options = [ "Все" ]
            let year = 2019
            while (year <= new Date().getFullYear()){
                options.push(year)
                year++
            }
            return options
        }
    },
    methods: {
        filter_date(){
            this.next= null
            this.origin = new URL(this.origin)
            if (this.date_select_model !== 'Все') 
                this.origin.searchParams.set('date',this.date_select_model)
            else {
                this.origin.searchParams.delete('date')
            }
            this.events = []
            this.load()
        },
        async load(){
            let events = this.next ? this.next : this.origin
            let response = await ky.get(events).json()
            response._embedded.items.forEach(val => this.events.push(val))
            this.next = response._links?.next?.href || null
        },
        prev() {
            if ((this.year === 2020) && (this.month === 10)) return
            this.monthDate = this.monthDate
                .subtract(1, "months")
                .startOf("month");
            this.days = [...Array(this.monthDate.daysInMonth())].map((_, i) =>
                this.monthDate.clone().add(i, "day")
            );
            this.month = this.monthDate.month();
            this.year = this.monthDate.year();
        },
        nextq() {
            this.monthDate = this.monthDate
                .add(1, "months")
                .startOf("month");
            this.days = [...Array(this.monthDate.daysInMonth())].map((_, i) =>
                this.monthDate.clone().add(i, "day")
            );
            this.month = this.monthDate.month();
            this.year = this.monthDate.year();
        },
    },
    mounted(){
        this.monthDate = moment().startOf("month");
        this.days = [...Array(this.monthDate.daysInMonth())].map((_, i) =>
            this.monthDate.clone().add(i, "day")
        );
        this.month = moment().month();
        this.year = this.monthDate.year();
        this.loaded = true
    },
    created(){
        this.load()
    }
};
</script>
