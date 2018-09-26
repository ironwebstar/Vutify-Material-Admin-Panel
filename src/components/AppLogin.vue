<template>
  <v-app id="login" class="primary" color="grey lighten-5">
    <v-content>
      <v-container fluid fill-height style="background-color: #fafafa">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg3>
            <v-card class="elevation-1">
              <v-card-text class="pa-3">
                <div class="layout column align-center">
                  <img src="../assets/HealthRay.svg" alt="HealthRay" width="180" height="150">
                </div>
                <v-form>
                  <v-text-field append-icon="phone" name="login" label="Phone number" type="text" v-model="model.username"></v-text-field>
                  <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password" v-model="model.password"></v-text-field>
                  <v-checkbox value="1" label="Remember Me" type="checkbox" required >
                  </v-checkbox>

                </v-form>
              </v-card-text>
              <v-card-actions class="pa-3">
                <v-flex xs0 sm4 md8 lg8></v-flex>
                <v-flex xs12 sm8 md4 lg4>
                  <v-btn block class="v-btn v-btn--large v-btn--depressed info" @click="login" :loading="loading">Log In</v-btn>
                </v-flex>
              </v-card-actions>
                <!-- <v-btn flat color="grey" append-icon="lock"><router-link to="/forget_password">Forgot password?</router-link></v-btn> -->
                <v-btn flat color="grey" append-icon="lock" class="v-btn" @click="forget_password" :loading="loading2">Forgot password?</v-btn>
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
    loading2: false,
    model: {
      username: '',
      password: ''
    }
  }),

  methods: {
    login () {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/');
      }, 1000);
    },
    forget_password () {
      this.loading2 = true;
      setTimeout(() => {
        this.$router.push('/forget_password');
      }, 300);
    }
  }

};
</script>
<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
    background-color: #fafafa;
  }
</style>
