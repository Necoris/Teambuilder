<template>
<div class="team">
  <h1 class="subheading white--text"></h1> 
  <v-content>
    <v-flex  >
      <v-btn v-for="team in teams" v-bind:key="team.text" router :to="team.route">{{team.text}}</v-btn>
    </v-flex>
  </v-content>
</div>
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
            teams: [
                {text:'team1', route:'/teams/team1'},
                {text:'team2', route:'/teams/team2'},
            ]
        }
    }
    
}
</script>