<template>
  <v-toolbar color="indigo lighten-2" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text"><router-link to="/"><v-btn flat>Admin</v-btn></router-link></v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn flat>About</v-btn>
      <v-btn flat>Contact</v-btn>
      <router-link to="/login"><v-btn flat>Login</v-btn></router-link>
    </div>
    <div class="hidden-md-and-up"></div>
  </v-toolbar>

</template>
