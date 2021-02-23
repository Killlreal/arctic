<template lang="pug">
section
    div.news_headline 
        h2.h2_headline Новости
    .news_item(v-for="(new_item,index) in newsItems")
        article.news_item_wrapper_right(v-if="index % 2 === 0")
            .news_item_right
                    .news_item_img_left
                        img(:src="new_item.picture")
                    h3.news_item_headline {{ new_item.title }}
                    p.news_item_paragraph {{ new_item.announce }}
                    div.news_item_btn
                        a.btn_border(:href="new_item.pageRef") Подробнее
        article.news_item_wrapper_left(v-else)
            .news_item_left
                    h3.news_item_headline {{ new_item.title }}
                    p.news_item_paragraph {{ new_item.announce}}
                    div.news_item_btn
                        a.btn_border(:href="new_item.pageRef") Подробнее
                    .news_item_img_left
                        img(:src="new_item.picture")
    div.news_btn
        a.btn_border(v-if="next" @click="load") Показать еще
    div.news_btn_minscreens
        a.news_btn_minscreens_no-border(v-if="next" @click="load") Показать еще
</template>

<script>
import ky from 'ky';

export default {
    data() {
        return {
            newsItems: [],
            next: "/api/news/lines?cid=201d103e6cd6ac6c94f34d853ee05b84&limit=4"
        };
    },
    methods: {
        async load(){
            let response = await ky.get(this.next).json()
            response._embedded.items.forEach(val => this.newsItems.push(val))
            console.log(this.newsItems)
            this.next = response._links?.next?.href || null
        }
    },
    created(){
        this.load()
    }
};
</script>
