<template>
<b-container>
    <b-row>
        <h3>
            Adicionar jogo
        </h3>
    </b-row>

    <b-row>
        <b-form>
            <label for="inline-form-input-name"></label>
                <b-form-input v-model="name" id="inline-form-input-name"></b-form-input>
                <label for="inline-form-input-text"></label>
                <b-form-input v-model="year_published" id="inline-form-input-text"></b-form-input>
                <b-button @click="criarJogo()">Salvar</b-button>
        </b-form>
    </b-row>
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
        ...mapActions(["AdicionarJogo"]),

        criarJogo() {
            let jogo = {
                "name": this.name,
                "year_publised": this.year_published
            }
            this.adicionarJogo(jogo)
        }

    }

}
</script>

<style>

</style>