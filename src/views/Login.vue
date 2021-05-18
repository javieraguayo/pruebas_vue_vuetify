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
                    <v-form>
                      <v-text-field
                        prepend-icon="mdi-at"
                        name="Email"
                        label="Email"
                        type="email"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-lock"
                        name="password"
                        label="Contraseña"
                        id="password"
                        type="password"
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
                    <v-btn color="success" block
                      ><v-icon small class="mr-1">mdi-login</v-icon
                      >Acceder</v-btn
                    >
                  </v-card-actions>
                </v-tab-item>

                <v-tab ripple>Registro</v-tab>
                <v-tab-item>
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        prepend-icon="mdi-account"
                        name="nombre"
                        label="Nombre"
                        type="email"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-account"
                        name="apellido"
                        label="Apellido"
                        type="email"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-phone"
                        name="telefono"
                        label="Telefono"
                        type="email"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-at"
                        name="email"
                        label="Email"
                        type="text"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-lock"
                        name="password"
                        label="Contraseña"
                        id="password"
                        type="password"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-lock"
                        name="repeat-password"
                        label="Repetir Contraseña"
                        id="repeat-password"
                        type="password"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" block>Registrarse</v-btn>
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
export default {
  name: "Login",
  data: () => ({
    active: null,
    checkbox: true,
  }),
};
</script>

<style>
div[data-app="true"] {
  background: url("../assets/blue-snow/blue-snow.png") repeat fixed !important;
  background-size: cover;
}
</style>