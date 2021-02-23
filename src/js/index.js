"use strict";
import "../css/main.css";
import Vue from 'vue';
import Vuex from 'vuex';
import initMap from './components/map';
import initApp from './global'

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initApp();
});
