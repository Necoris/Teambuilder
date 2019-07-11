<template>
<div class="team">
  <h1 class=" white--text text-md-center">Placeholder Team Name</h1> 
    <v-container class="my-5">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                <v-card class="text-xs-center ma-3">
                    <v-responsive class="pt-4">
                        <v-avatar size="100" class="grey lighten-2">
                            <img :src="person.avatar">
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="subheading">{{person.name}}</div>
                        <div class="grey--text">{{person.role}}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat small>
                            <v-icon small left>message</v-icon>
                            <span small>Message</span>
                        </v-btn>
                        <v-btn flat small>
                            <v-icon small left>person</v-icon>
                            <span small> Profile</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        
        </v-layout>
    </v-container>
</div>
</template>

<script>

  export default {
      data() {
          return{
              team: [
                  {name: 'Placeholder', role:'Placeholder', avatar: '/placeholder.png'},
                  {name: 'Placeholder', role:'Placeholder', avatar: '/placeholder.png'},
                  {name: 'Placeholder', role:'Placeholder', avatar: '/placeholder.png'},
                  {name: 'Necoris', role:'ADC', avatar: '/caitlyn.png'},
                  {name: 'Placeholder', role:'Placeholder', avatar: '/placeholder.png'},

              ]
          }
      }
  }
</script>
