<template>
    <b-container>
        <b-row>
            <h3>
                Adicionar jogo
            </h3>
        </b-row>
            
        <div class="form-group">
            <label for="nome">
                Nome:
            </label>

            <input
                type="text"
                class="form-control"
                id="nome"
                placeholder="Ex. Jogo do Bicho"
                v-model.trim.lazy="name"
                required
            />

            <label for="ano">
                Ano de publicação:
            </label>

            <input 
            type="number" 
            v-model.trim.lazy="year_published"
            id="ano"
            placeholder="Ex. 1991"
            class="form-control"
            required
            />

            <label for="min_jogador">
                Número mínimo de jogadores:
            </label>

            <input 
            type="number" 
            v-model.trim.lazy="min_players"
            id="min_jogador"
            placeholder="Ex. 2"
            class="form-control"
            required
            />

            <label for="max_jogador">
                Número máximo de jogadores:
            </label>

            <input 
            type="number" 
            v-model.trim.lazy="max_players"
            id="max_jogador"
            placeholder="Ex. 6"
            class="form-control"
            required
            />

            <label for="min_tempo">
                Tempo mínimo de jogo:
            </label>

            <input 
            type="number" 
            v-model.trim.lazy="min_playtime"
            id="min_tempo"
            placeholder="Ex. 15"
            class="form-control"
            required
            />

            <label for="max_tempo">
                Tempo máximo de jogo:
            </label>

            <input 
            type="number" 
            v-model.trim.lazy="max_playtime"
            id="max_tempo"
            placeholder="Ex. 45"
            class="form-control" 
            required
            />

            <label for="min_idade">
                Idade mínima recomendada:
            </label>

            <input 
            type="number" 
            v-model.trim.lazy="min_age"
            id="min_idade"
            placeholder="Ex. 10"
            class="form-control" 
            required
            />

            <b-row>
                <b-button @click="criarJogo()" variant="danger">
                    Salvar
                </b-button>
            </b-row>
            
        </div>
    </b-container>
</template>

<script>
import {mapActions} from "vuex"

export default {
    name: 'AdicionarJogo',

    data() {
        return {
            name: "",
            year_published: "",
            min_players: "",
            max_players: "",
            min_playtime: "",
            max_playtime: "",
            min_age: "",
            image_url: ""
        }
    },

    methods: {
        ...mapActions(["adicionarJogo"]),

        criarJogo() {
            let jogo = {
                "name": this.name,
                "year_published": this.year_published,
                "min_players": this.min_players,
                "max_players": this.max_players,
                "min_playtime": this.min_playtime,
                "max_playtime": this.max_playtime,
                "min_age": this.min_age,
                "image_url": "https://media.gettyimages.com/vectors/illustration-of-fun-game-night-components-handdrawn-vector-elements-vector-id1273928104?s=2048x2048"
            }
            this.adicionarJogo(jogo)
        }

    }

}
</script>

<style>
.btn {
    margin: auto;
    margin-top: 10px;
}

h3 {
    margin: auto;
    margin-top: 50px;
}

.form-control {
    margin-bottom: 20px;
}

.form-group {
    margin: auto;
}
</style>