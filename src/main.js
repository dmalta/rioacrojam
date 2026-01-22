import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import './style.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faLanguage, faWhatsapp, faInstagram)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(i18n)
  .mount('#app')