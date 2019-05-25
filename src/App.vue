<template>
  <div id="app" style="height: 100%">
    <v-container py-0 px-0 mx-0 flex fill-height>
      <v-flex fill-height hidden-sm-and-down>
        <my-navbar />
      </v-flex>
      <v-flex fill-height>
        <v-app>
          <router-view />
        </v-app>
      </v-flex>
    </v-container>
  </div>
</template>
<script>
    import MyNavbar from './components/Navbar'
    export default {
        name: 'app',
        components: {
            MyNavbar
        }
    };
</script>
<style>

  @media only screen and (max-width: 500px) {
    #app {
      font-size: 10px;
    }
    .intro{
      font-size: 40px !important;
    }
  }

  #app {
    background-color: white;
  }
</style>
