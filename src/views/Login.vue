<template>
<v-app id="inspire" dark >
    <v-content >
      <v-container fluid fill-height>
        <v-layout align-center justify-center row>
          <v-flex xs12 sm8 md4>
            <v-card>
              <v-card-text>
                <v-container>
                  <v-form ref="login">
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                        name="email"
                        label="Email"
                        id="email"
                        v-model="email"
                        type="email"
                        required></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        v-model="password"
                        type="password"
                        required></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-btn type="submit" @click="onRegister">Register</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import db from '@/fb'

  export default {
    data () {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      
      onRegister () {


        db.auth().createUserWithEmailAndPassword(this.email,this.password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }

        });
        
          
        }

      }
    }
  
</script>
