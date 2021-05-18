<template>
  <v-app id="inspire">
    <v-main>
      <div class="float-right">
        <v-alert type="success">Credenciales correctas</v-alert>
        <v-alert type="error">Credenciales incorrectas</v-alert>
      </div>

      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12" ref="logins">
              <v-toolbar dark color="primary">
                <v-toolbar-title class="white--text">Wemfi</v-toolbar-title>
              </v-toolbar>
              <v-tabs v-model="active" dark slider-color="yellow">
                <v-tab ripple>Ingreso</v-tab>
                <v-tab-item>
                  <v-card-text>
                    <LoginGoogle />
                    <v-form @submit.prevent="login" id="login-form">
                      <v-text-field
                        prepend-icon="mdi-at"
                        name="Email"
                        label="Email"
                        type="email"
                        v-model="email"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-lock"
                        name="password"
                        label="Contraseña"
                        type="password"
                        v-model="password"
                      ></v-text-field>
                      <v-checkbox v-model="checkbox">
                        <template v-slot:label>
                          <div>Recordarme</div>
                        </template>
                      </v-checkbox>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="success" block form="login-form"
                      ><v-icon small class="mr-1">mdi-login</v-icon
                      >Acceder</v-btn
                    >
                  </v-card-actions>
                </v-tab-item>

                <v-tab ripple>Registro</v-tab>
                <v-tab-item>
                  <v-card-text>
                    <v-form @submit.prevent="signup" id="register-form">
                      <v-text-field
                        prepend-icon="mdi-account"
                        name="nombre"
                        label="Nombre"
                        type="text"
                        v-model="sunombre"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-account"
                        name="apellido"
                        label="Apellido"
                        type="text"
                        v-model="suapellido"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-phone"
                        name="telefono"
                        label="Telefono"
                        type="number"
                        v-model="sutelefono"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-at"
                        name="email"
                        label="Email"
                        type="text"
                        v-model="suemail"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-lock"
                        name="password"
                        label="Contraseña"
                        id="password"
                        type="password"
                        v-model="supassword"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-lock"
                        name="repeat-password"
                        label="Repetir Contraseña"
                        id="repeat-password"
                        type="password"
                        v-model="surepeatpassword"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      type="submit"
                      color="success"
                      block
                      form="register-form"
                      >Registrarse</v-btn
                    >
                  </v-card-actions>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LoginGoogle from "../components/LoginGoogle";

export default {
  name: "Login",
  components: {
    LoginGoogle,
  },
  data: () => ({
    active: null,
    checkbox: true,
    //login
    email: "",
    password: "",
    //registro
    sunombre: "",
    suapellido: "",
    sutelefono: "",
    suemail: "",
    supassword: "",
    surepeatpassword: "",

    error: false,
    error_msg: "",
  }),
  methods: {
    login() {
      let json = {
        email: this.email,
        password: this.password,
      };

      console.log(json);

      fetch("url", {
        method: "POST",
        body: JSON.stringify(json),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (err) {
          console.error(err);
        });
    },
    signup() {
      let json = {
        nombre: this.sunombre,
        apellido: this.suapellido,
        telefono: this.sutelefono,
        email: this.suemail,
        password: this.supassword,
      };

      console.log(json);

      fetch("url", {
        method: "POST",
        body: JSON.stringify(json),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (err) {
          console.error(err);
        });
    },
  },
};
</script>

<style>
div[data-app="true"] {
  background: url("../assets/blue-snow/blue-snow.png") repeat fixed !important;
  background-size: cover;
}
</style>