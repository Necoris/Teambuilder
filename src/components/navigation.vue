<template>
 <nav>
    <v-navigation-drawer  v-model="drawer" clipped fixed app> 
      <v-layout column align-center>
        <v-flex class="mt-3">
          <v-avatar size="200">
            <img src="/placeholder.png" >
          </v-avatar>
          <p class="text--white subheading mt-2 text-sm-center" >Necoris</p>
        </v-flex>

      </v-layout>   
      <v-list dense>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" @click="drawer = !drawer">
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark app clipped-left fixed>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>My Side</span>
        <span class="font-weight-light"> First Test Build</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn  flat >Sign Out</v-btn>
      <v-icon>exit_to_app</v-icon>
    </v-toolbar>
 </nav>

</template>

<script>
export default {
    data () {
        return {
            drawer: false,
            links: [
                {icon: 'dashboard', text:'Dashboard', route:'/'},
                {icon: 'person', text:'Profile', route:'/profile'},
                {icon: 'people', text:'Team', route:'/team'},
                {icon: 'https', text:'Login', route:'/login'},
            ]
        }
    }
    
}
</script>
