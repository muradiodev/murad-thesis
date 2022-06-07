import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap';
import VueNativeNotification from 'vue3-native-notification'
import {createI18n} from 'vue-i18n'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

let messagesEn = require("@/locales/en.json");
let messages = {
    en: messagesEn
};

const i18n = createI18n({
    locale: 'en',
    messages
})

import {library} from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import {faUserSecret, faSearch, faHeart, faShoppingBasket, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
/* add icons to the library */
library.add(faUserSecret)
library.add(faSearch)
library.add(faHeart)
library.add(faShoppingBasket)
library.add(faArrowAltCircleRight)


createApp(App)
    .use(store)
    .use(router)
    .use(bootstrap)
    .use(VueToast)
    .use(VueNativeNotification, {
        requestOnNotify: true
    })
    .use(i18n)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
