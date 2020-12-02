<template>
<b-container>
    <adicionar-jogo />

<b-card-group deck>
                
                <b-card 
                v-for="jogo in todosOsJogos" 
                :key="jogo.id"
                style="min-width: 16rem; max-width: 16rem;"
                border-variant="primary" 
                :header="jogo.name" 
                header-bg-variant="primary" 
                header-text-variant="white" 
                align="center"
                >
                
                    <b-card-text>
                        <router-link tag="p" :to="{name:'DetalharJogos', params: {id: jogo.id, jogo: jogo}}">
                            Detalhar
                        </router-link>
                    </b-card-text>

                    <b-card-text>
                        <b-icon-trash 
                        @click="deletarJogo(jogo.id)"
                        >
                        </b-icon-trash>
                    </b-card-text>
                </b-card>
            </b-card-group>
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

</style>