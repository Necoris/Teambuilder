<template>
  <v-app id="inspire" dark>
   <navigation /> 
  

    <v-content class="mx-4 mb-4">
     <router-view>
     </router-view>
    </v-content>
    <v-footer app height="auto">       
      <v-layout
      justify-center
      row
      wrap>
        <v-flex
        text-xs-center
        white--text
        xs12>
        <span class="font-weight-light">
          © 2019  Necoris
        </span>
        <strong>Alpha 0.1</strong>
      </v-flex>
      </v-layout>
    </v-footer>  
  </v-app>
</template>

<script>
import navigation from '@/components/navigation'

export default {
  name: 'App',
  components: {navigation},

  data () {
    return {
      count:0
    }

  },
   
}
</script>
