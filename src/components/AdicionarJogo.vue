<template>
<b-container>
    <b-row>
        <h3>
            Adicionar jogo
        </h3>
    </b-row>

    <label for="name">Nome:</label>
        <input type="text" v-model="name" id="name">
        <label for="ano">Ano de publicação:</label>
        <input type="number" v-model="year_published" id="ano">
        <button @click="criarJogo()">Salvar</button>
</b-container>
</template>

<script>
import {mapActions} from "vuex"

export default {
    name: 'AdicionarJogo',

    data() {
        return {
            name: "",
            year_published: ""
        }
    },

    methods: {
        ...mapActions(["adicionarJogo"]),

        criarJogo() {
            let jogo = {
                "name": this.name,
                "year_published": this.year_published
            }
            console.log(jogo)
            this.adicionarJogo(jogo)
        }

    }

}
</script>

<style>

</style>