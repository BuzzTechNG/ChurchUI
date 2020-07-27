import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = "http://192.168.1.117:3001/"
Vue.prototype.$axios = axios
