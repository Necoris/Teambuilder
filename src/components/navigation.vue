<template>
 <nav>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
        >
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
        <span>Team Builder</span>
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
