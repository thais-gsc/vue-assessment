import Vue from 'vue';
import VueRouter from 'vue-router';

import ListaDeJogos from './components/ListaDeJogos'
import DetalharJogos from './components/DetalharJogos'


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'lista',
            component: ListaDeJogos
        },
        {
            path: '/jogos/:id',
            name: 'DetalharJogos',
            component: DetalharJogos
        }
    ]
})