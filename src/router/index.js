import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '../components/Dashboard'
import PersonelList from '../components/PersonelList'
import AddNewPerson from '../components/AddNewPerson'
import Profile from '../components/Profile'

const routes = [
    { path: '/', component: Dashboard},
    { path: '/personel', component: PersonelList},
    { path: '/personel/:id', component: Profile},
    { path: '/personel/add', component: AddNewPerson},
]


const router = createRouter({
    history: createWebHistory(),
    routes, 
})


export default router