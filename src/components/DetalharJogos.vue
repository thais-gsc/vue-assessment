<template>
    <b-container>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
            <b-col md="6">
                <b-card-img  :src="jogo.image_url" :alt="jogo.name" :title="jogo.name" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="jogo.name">
                <b-card-text>
                    <b-col>Ano de publicação: {{jogo.year_published}}</b-col>
                    <b-col>Número de jogadores: {{jogo.min_players}} a {{jogo.max_players}}</b-col>
                    <b-col>Tempo estimado: {{jogo.min_playtime}} a {{jogo.max_playtime}} minutos</b-col>
                    <b-col>Recomendado para maiores de {{jogo.min_age}} anos</b-col>
                </b-card-text>

                <b-card-text><b-col><router-link to="/">Voltar</router-link> </b-col>
                </b-card-text>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>

        <div>
            <h2>Editar</h2>

            <div class="form-group" @submit="onSubmit">
        <label for="Nome">Nome: </label>
        <input
            type="text"
            class="form-control"
            id="Nome"
            placeholder="Digita nome"
            v-model="jogo.name"
        />

        <label for="ano">Ano de publicação: </label>
        <input 
        type="number" 
        v-model.trim.lazy="jogo.year_published"
        id="ano"
        class="form-control" />

        <label for="min_jogador">Número mínimo de jogadores: </label>
        <input 
        type="number" 
        v-model.trim.lazy="jogo.min_players"
        id="min_jogador"
        class="form-control" />

        <label for="max_jogador">Número máximo de jogadores: </label>
        <input 
        type="number" 
        v-model.trim.lazy="jogo.max_players"
        id="max_jogador"
        class="form-control" />

        <label for="min_tempo">Tempo mínimo de jogo: </label>
        <input 
        type="number" 
        v-model.trim.lazy="jogo.min_playtime"
        id="min_tempo"
        class="form-control" />

        <label for="max_tempo">Tempo máximo de jogo: </label>
        <input 
        type="number" 
        v-model.trim.lazy="jogo.max_playtime"
        id="max_tempo"
        class="form-control" />

        <label for="min_idade">Idade mínima recomendada: </label>
        <input 
        type="number" 
        v-model.trim.lazy="jogo.min_age"
        id="min_idade"
        class="form-control" />
        </div>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'DetalharJogos',
    
    data() {
        return {
            id: this.$route.params.id,
            jogo: this.$route.params.jogo
        }
    },

    methods: {
        onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.jogo))
        }
    }
}
</script>

<style>
.card {
    margin: auto;
    margin-top: 50px;
    margin-bottom: 30px
}
</style>