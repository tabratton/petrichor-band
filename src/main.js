import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './index.css'

library.add(faInstagram)
library.add(faEnvelope)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
