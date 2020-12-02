import axios from 'axios'

const state = {
    jogos: []
}

const getters = {
    todosOsJogos: state => state.jogos 
}

const actions = {
    getJogos({commit}) {
        axios.get("https://api.boardgameatlas.com/api/search?limit=12&client_id=BBbVj4m8NB").then((response) => {commit('getJogos', response.data.games)})
    }
}

const mutations = {
    getJogos: (state, data) => (state.jogos = data)
}

export default {
    state,
    actions,
    getters,
    mutations
}