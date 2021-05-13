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
          @click="$router.push({ path: item.route })"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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

