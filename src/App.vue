<template>
  <v-app light>
    <v-toolbar color="purple lighten-2" class="white--text" style="max-height: 64px;">
      <v-toolbar-title class="white--text">
        <router-link to="/">{{title}}</router-link>
      </v-toolbar-title>
    </v-toolbar>

    <router-view></router-view>
    
    <v-footer color="white grey--text text--lighten-1 text-center pa-12" style="font-weight: 300;">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="ml-4">
            @copyright F5 games | <router-link to="privacy">Privacy</router-link>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>
<style>
a {
  text-decoration: none;
  color: inherit !important;
}
.v-toolbar__content{
  -webkit-box-shadow: 0px 7px 20px 5px rgba(237,206,237,0.59);
  -moz-box-shadow: 0px 7px 20px 5px rgba(237,206,237,0.59);
  box-shadow: 0px 7px 20px 5px rgba(237,206,237,0.59);
}
</style>
<script>
export default {
  name: "App",

  data: () => ({
    title: "F5 Games"
  })
};
</script>
