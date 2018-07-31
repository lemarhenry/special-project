<template>
  <v-app light>
    <!--mobile nav bar-->
    <v-navigation-drawer v-model="sideNav" app>
      <v-list-tile v-for="item in Menu" :key="item.title" router :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
    </v-navigation-drawer>
    <!--desktop nav bar-->
  
    <v-toolbar light>
      <v-toolbar-side-icon @click.native.stop="sideNav=!sideNav" class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title mt-2>
        <router-link to="/" tag="span"><img src="../src/assets/logo.png" width="209" height="53"></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
  
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in Menu" :key="item.title" class="success" router :to="item.link">
          <v-icon left class="nav"> {{ item.icon }}</v-icon>{{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
  
      <v-slide-y-transition  mode="out-in">
        <router-view/>
      </v-slide-y-transition>
      <v-footer dark height="auto">
        <v-card flat tile class="primary selighten-1 white--text text-xs-center">
          <v-card-text>
            <v-btn class="mx-3 white--text" icon>
              <v-icon size="30px">fa fa-linkedin</v-icon>
            </v-btn>
            <v-btn class="mx-3 white--text" icon>
              <v-icon size="30px">fa fa-twitter</v-icon>
            </v-btn>
            <v-btn class="mx-3 white--text" icon>
              <v-icon size="30px">fa fa-facebook</v-icon>
            </v-btn>
            <v-btn class="mx-3 white--text" icon>
              <v-icon size="30px">fa fa-instagram</v-icon>
            </v-btn>
          </v-card-text>
  
          <v-card-text class="white--text pt-0">
            faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui
             sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.
          </v-card-text>
          <v-card-text>
            <v-btn class="secondary" large raised>
              Subscribe
            </v-btn>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-text class="white--text">
            &copy;2018 — <strong>FENNTECHLTD</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        sideNav: false,
        Menu: [{
            icon: 'home',
            title: 'Home',
            link: '/'
          },
          {
            icon: 'person',
            title: 'About',
            link: '/About'
          },
          {
            icon: 'phone',
            title: 'Contact',
            link: '/ContactUs'
          },
          {
            icon: 'work',
            title: 'Jobs',
            link: '/Jobs'
          },
          {
            icon: 'folder',
            title: 'Portfolio',
            link: '/Portfolio'
          },
          {
            icon: 'group',
            title: 'Our Clients',
            link: '/Ourclients'
          },
        ],
      }
    },
  }
</script>

<style>
  .nav {
    font-style: bold;
  }
  
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css";
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
  @import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>

