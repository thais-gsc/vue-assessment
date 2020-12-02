<template>
    <b-container>
        <h1>{{jogo.name}}</h1>
        <img :src="jogo.image_url" :alt="jogo.name" :title="jogo.name">
        <h2>{{jogo.year_published}}</h2>
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
    }
}
</script>

<style>

</style>