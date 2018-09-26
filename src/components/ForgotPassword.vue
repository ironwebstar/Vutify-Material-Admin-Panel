<template>
  <v-app id="forget_password" class="primary" color="grey lighten-5">
    <v-content>
      <v-container fluid fill-height style="background-color: #fafafa">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg3>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                 <div class="layout column align-center">
                  <img src="../assets/HealthRay.svg" alt="HealthRay" width="180" height="150">
                </div>
                <div class="layout column align-center">
                  <h3>Reset password</h3>
                </div>e
                <br/><br/>
                <v-form>
                  <v-text-field appnd-icon="phone" name="phone" label="Phone Number" type="text" v-model="model.email">
                  </v-text-field>
              </v-form>
              <p>Enter your phone number to recieve the verification OTP</p>
              </v-card-text>
              <v-card-actions>
                <v-flex xs0 sm4 md8 lg8></v-flex>
                <v-flex xs12 sm8 md4 lg4>
                  <v-btn block class="v-btn v-btn--large v-btn--depressed warning" @click="reset" :loading="loading">Reset</v-btn>
                </v-flex>
              </v-card-actions>
              <v-btn flat color="grey" append-icon="lock">
                <router-link to="/login">Go back to login page</router-link></v-btn>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    model: {
      email: ''
    }
  }),

  methods: {
    reset () {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/');
      }, 1000);
    }
  }

};
</script>
<style scoped lang="css">
  #forget_password {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
