import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {VDataTableServer} from 'vuetify/labs/VDataTable'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as comp from 'vuetify/components'
import * as directives from 'vuetify/directives'

let c = comp
c.VDataTableServer = VDataTableServer

const vuetify = createVuetify({
    components: c,
    directives,
    icons: {
        defaultSet: 'mdi'
    }
})

const vue = createApp(App)

vue.use(vuetify)
vue.use(router)
vue.mount('#app')