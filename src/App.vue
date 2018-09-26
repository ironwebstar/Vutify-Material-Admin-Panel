<template>
  <div id="appRoot">
    <template v-if="!$route.meta.public">
      <v-app id="inspire" class="app">
        <app-drawer class="app--drawer"></app-drawer>
        <app-toolbar2 class="app--toolbar"></app-toolbar2>
        <v-content>
          <!-- Page Header -->
          <page-header v-if="$route.meta.breadcrumb"></page-header>
          <div class="page-wrapper">
            <router-view></router-view>
          </div>
           <!-- App Footer -->
          <v-footer height="auto" class="white pa-3 app--footer">
            <span class="caption">WebCodeStar &copy; {{ new Date().getFullYear() }}</span>
            <v-spacer></v-spacer>
            <!-- <span class="caption mr-1"> Make With Love </span> <v-icon color="pink" small>favorite</v-icon> -->
          </v-footer>
        </v-content>
        <!-- Go to top -->
        <!-- <app-fab></app-fab> -->
        <!-- theme setting -->
        <!-- <v-btn small fab dark falt fixed top="top" right="right" class="setting-fab" color="red" @click="openThemeSettings">
          <v-icon>settings</v-icon>
        </v-btn> -->
        <v-navigation-drawer
          class="setting-drawer"
          temporary
          right
          v-model="rightDrawer"
          hide-overlay
          fixed
          >
          <!-- <theme-settings></theme-settings> -->
        </v-navigation-drawer>        
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
    <v-snackbar
      :timeout="3000"
      bottom
      right
      :color="snackbar.color"
      v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <v-btn dark flat @click.native="snackbar.show = false" icon> 
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>    
  </div>
</template>
<script>
import AppDrawer from '@/components/AppDrawer';
import AppToolbar2 from '@/components/AppToolbar2';
// import AppFab from '@/components/AppFab';
import PageHeader from '@/components/PageHeader';
import menu from '@/api/menu';
// import ThemeSettings from '@/components/ThemeSettings';
import AppEvents from  './event';
import colors from 'vuetify/es5/util/colors';
export default {
  components: {
    AppDrawer,
    AppToolbar2,
    // AppFab,
    // PageHeader,
    // ThemeSettings
  },
  data: () => ({
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: false,
      text: '',
      color: '',
    }
  }),

  computed: {

  },

  created () {
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  },
  methods: {
    openThemeSettings () {
      this.$vuetify.goTo(0);
      this.rightDrawer = (!this.rightDrawer);
    }
  },

};
</script>


<style lang="stylus" scoped>
  .setting-fab 
    top:50%!important; 
    right:0;
    border-radius:0  
  .page-wrapper
    min-height:calc(100vh - 64px - 50px - 81px ); 
  #login main .v-content__wrap
    background-color: #fafafa
</style>
<style>
  #login main .v-content__wrap, #forget_password main .v-content__wrap {
    background-color: #fafafa !important;
    position: relative;
    z-index: 1
  }
  i { font-family: 'Material Icons'; }
  .v-btn__content { text-decoration: none }
</style>

