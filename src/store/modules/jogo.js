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
    },

    deletarJogo({commit}, id) {
        commit('deletarJogo', id)
        window.alert('Jogo excluído :(')
    },

    adicionarJogo({commit}, jogo) {
        commit('adicionarJogo', jogo)
    }
}

const mutations = {
    getJogos: (state, data) => (state.jogos = data),

    deletarJogo: (state, id) => (state.jogos = state.jogos.filter(j => j.id !== id)), //chama todos os jogos sem ser o que tem esse id

    adicionarJogo: (state, data) => state.jogos.push(data)
}

export default {
    state,
    actions,
    getters,
    mutations
}