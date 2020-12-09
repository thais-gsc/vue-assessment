<template>
    <b-container>
        

        <b-row>
            <h1>
                <b-icon icon="dice6" animation="spin" font-scale="1"></b-icon> 
                Jogos de Tabuleiro 
                <b-icon icon="dice6-fill" animation="spin-reverse" font-scale="1"></b-icon>
            </h1>
        </b-row>
        

        <b-card-group deck>
            <b-card 
            v-for="jogo in todosOsJogos" 
            :key="jogo.id"
            style="min-width: 16rem; max-width: 16rem;"
            border-variant="default" 
            :header="jogo.name" 
            header-bg-variant="danger" 
            header-text-variant="white" 
            align="center"
            class="card"
            >
            
                <b-card-text>
                    <b-button variant="outline-danger">
                        <router-link tag="span" 
                        :to="{name:'DetalharJogos', params: {id: jogo.id, jogo: jogo}}"
                        >
                            Detalhar
                        </router-link>
                    </b-button>
                </b-card-text>

                <b-link class="b-link">
                    <b-icon-trash 
                    @click="deletarJogo(jogo.id)"
                    ></b-icon-trash>
                </b-link>
            </b-card>
        </b-card-group>

        <adicionar-jogo />
        
        
    </b-container>
</template>

<script>
import { mapGetters, mapActions} from "vuex"
import AdicionarJogo from './AdicionarJogo.vue'

export default {
    name: 'ListaDeJogos',

    components: {
        AdicionarJogo 
    },

    computed: mapGetters(["todosOsJogos"]),

    methods: {
        ...mapActions(["getJogos", "deletarJogo"])
    },

    created() {
        this.getJogos()
    }
}
</script>

<style>
    .card {
        margin: auto;
    }

    .card-deck {
        margin-left: 100px;
    }

    h1 {
        margin: auto;
        margin-top: 20px;
    }
</style>