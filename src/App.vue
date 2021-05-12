<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
     <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Wemfi</v-toolbar-title>

      <v-spacer></v-spacer>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
   

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Nombre Usuario</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title><router-link :to="{ name: item.title, params: {placeName: item.route } }">{{ item.title }}</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    

    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>
/* import HelloWorld from './components/HelloWorld'; */

export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    drawer : false,
    items: [
          { title: 'Asesores', icon: 'mdi-account-group', route : '/asesores' },
          { title: 'Clientes', icon: 'mdi-account-group', route : '/clientes'},
          { title: 'Inversionistas', icon: 'mdi-account-group', route : '/inversionistas'},
        ],
  }),
};
</script>

