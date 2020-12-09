<template>
  <b-container>
    <b-navbar type="light" variant="light">
        <b-navbar-brand id="inicio">
            Ludoteca
        </b-navbar-brand>
    </b-navbar>

    <router-view />

    <b-navbar type="light" variant="light" class="footer">
      <span>
        Assessment de Frameworks Front-End e Conexão com Back-End - Thaís Gadiole Schöntag
      </span>

      <span>
        <a href="#inicio" title="Voltar para o início da página">
          <b-icon icon="arrow-bar-up"></b-icon>
        </a>
      </span>
    </b-navbar>
  </b-container>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');


  body {
    background-image: url("https://cdn.pixabay.com/photo/2015/10/28/15/19/figures-1010678_960_720.jpg");
  }

  h1, h2, h3, h4, .card-header {
    font-weight: 700;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.671);
  }

  .container {
    font-family: 'Nunito', sans-serif;
    background-color: rgba(255, 255, 255, 0.650);
  }

  .footer {
    display: flex;
    justify-content: space-around;
  }
</style>
