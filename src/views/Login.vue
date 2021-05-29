<template>
  <v-app id="app">
    <v-main>
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
                    <v-form
                      @submit.prevent="login"
                      id="login-form"
                      ref="validlogin"
                      v-model="validlogin"
                      lazy-validation
                    >
                      <v-text-field
                        prepend-icon="mdi-at"
                        name="Email"
                        label="Email"
                        type="email"
                        v-model="email"
                        :rules="emailRules"
                        required
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-lock"
                        name="password"
                        label="Contraseña"
                        type="password"
                        v-model="password"
                        :rules="passwordRules"
                        required
                      ></v-text-field>
                      <v-checkbox v-model="checkbox">
                        <template v-slot:label>
                          <div>Recordarme</div>
                        </template>
                      </v-checkbox>
                    </v-form>
                  </v-card-text>
                  <div class="mx-2 text-center">
                    <v-alert type="error" v-if="error"
                      >Credenciales incorrectas</v-alert
                    >
                  </div>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      type="submit"
                      color="success"
                      block
                      form="login-form"
                      @click="
                        validatelogin;
                        loader = 'loading';
                      "
                      :disabled="isDisabledlogin"
                      :loading="loading"
                      ><v-icon small class="mr-1">mdi-login</v-icon
                      >Acceder</v-btn
                    >
                  </v-card-actions>
                </v-tab-item>
                <v-tab ripple>Registro</v-tab>
                <v-tab-item>
                  <v-card-text>
                    <v-form
                      @submit.prevent="signup"
                      id="register-form"
                      ref="validregister"
                      v-model="validregister"
                      lazy-validation
                    >
                      <v-text-field
                        prepend-icon="mdi-account"
                        name="nombre"
                        label="Nombre o Razón Social"
                        :counter="40"
                        type="text"
                        v-model="nombre"
                        :rules="nombreRules"
                        required
                      ></v-text-field>

                      <v-text-field
                        prepend-icon="mdi-card-account-details-outline"
                        name="apellido"
                        label="Nº de Identificación Fiscal - NIF"
                        :counter="10"
                        type="text"
                        v-model="nif"
                        :rules="nifRules"
                        required
                      ></v-text-field>

                      <v-text-field
                        prepend-icon="mdi-map-marker"
                        name="nombre"
                        label="Domicilio Social"
                        :counter="40"
                        type="text"
                        v-model="domicilio"
                        :rules="domicilioRules"
                        required
                      ></v-text-field>

                      <v-text-field
                        prepend-icon="mdi-phone"
                        name="nombre"
                        label="Teléfono"
                        :counter="9"
                        type="number"
                        v-model="telefono"
                        :rules="telefonoRules"
                        required
                      ></v-text-field>

                      <v-text-field
                        prepend-icon="mdi-at"
                        name="email"
                        label="Correo Electrónico de Contacto"
                        type="email"
                        v-model="suemail"
                        :rules="emailRules"
                        required
                      ></v-text-field>

                      <v-text-field
                        prepend-icon="mdi-account"
                        name="nombre"
                        label="Persona de Contacto"
                        :counter="40"
                        type="text"
                        v-model="persona_contacto"
                        :rules="personaRules"
                        required
                      ></v-text-field>

                      <v-select
                        prepend-icon="mdi-account"
                        :items="cargo"
                        label="Cargo de la Persona de Contacto"
                        required
                        :rules="cargopersonaRules"
                        v-model="cargo_contacto"
                      ></v-select>

                      <v-text-field
                        prepend-icon="mdi-lock"
                        name="password"
                        label="Contraseña"
                        id="password"
                        type="password"
                        v-model="supassword"
                        :rules="passwordRules"
                        required
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="mdi-lock"
                        name="repeat-password"
                        label="Repetir Contraseña"
                        id="repeat-password"
                        type="password"
                        v-model="surepeatpassword"
                        :rules="surepeatpasswordRules"
                        required
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <div class="mx-2 text-center">
                    <v-alert type="error" v-if="error_register"
                      >Hubo un error intenta mas tarde</v-alert
                    >
                  </div>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      type="submit"
                      color="success"
                      block
                      form="register-form"
                      @click="validateregistro"
                      :disabled="!validregister"
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
    cargo: ["Administrador", "Apoderado"],
    select: null,
    active: null,
    checkbox: true,
    //error de registro
    error_register: false,
    //login
    email: "",
    emailRules: [
      (v) => !!v || "Email es requerido",
      (v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail debe ser valido",
    ],
    cargopersonaRules: [(v) => !!v || "Cargo es requerido"],
    personaRules: [(v) => !!v || "Persona es requerida"],
    telefonoRules: [(v) => !!v || "Telefóno es requerido"],
    domicilioRules: [(v) => !!v || "Domicilio es requerido"],
    nifRules: [(v) => !!v || "NIF es requerido"],
    password: "",
    passwordRules: [(v) => !!v || "Contraseña es requerida"],
    //registro v-model
    nombre: "",
    nif: "",
    suemail: "",
    domicilio: "",
    telefono: null,
    persona_contacto: "",
    cargo_contacto: "",
    supassword: "",
    surepeatpassword: "",

    nombreRules: [
      (v) => !!v || "Nombre es requerido",
      (v) =>
        (v && v.length <= 20) || "El nombre debe tener menos de 20 caracteres",
    ],
    suapellido: "",
    suapellidoRules: [
      (v) => !!v || "Apellido es requerido",
      (v) =>
        (v && v.length <= 20) ||
        "El apellido debe tener menos de 20 caracteres",
    ],
    surepeatpasswordRules: [(v) => !!v || "Repetir contraseña es requerida"],
    //errores
    error: false,
    error_msg: "",
    //success
    success: false,
    //validacion de form
    validlogin: false,
    validregister: false,
    loader: null,
    //loading btn login
    loading: false,
    //validacion disabled button login
    isDisabledlogin: true,
    isDisabledregister: true,
  }),
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
  created() {
    this.$multiwatch(["email", "password"], function () {
      const valid = this.$refs.validlogin.validate();
      this.isDisabledlogin = !valid;
    });

    this.$multiwatch(
      [
        "nombre",
        "nif",
        "suemail",
        "domicilio",
        "telefono",
        "persona_contacto",
        "cargo_contacto",
        "supassword",
        "surepeatpassword",
      ],
      function () {
        const valid = this.$refs.validregister.validate();
        this.isDisabledregister = !valid;
      }
    );
  },
  methods: {
    async login() {
      let json = {
        email: this.email,
        password: this.password,
      };

      this.logintoserve(json);
    },
    logintoserve(json) {
      fetch("https://wemfi.herokuapp.com/auth/sign-in", {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        return response
          .json()
          .then( async (data) => {
            var token = data.token;
            localStorage.token = token;
            console.log(token);

            let rol = await this.checkrol(token);
            /* this.$router.push("/infocliente"); */
            console.log(rol);
            if(rol === 1){//admin
              this.$router.push("/clientes");
            } else { 
              //usuario
              this.$router.push("/infocliente");
            }

          })
          .catch((err) => {
            console.log(err);
            this.error = true;
          });
      });
    },
    async signup() {
      let json = {
        email: this.suemail,
        fullname: this.nombre,
        firstname: this.nombre,
        business_name: this.nombre,
        nif: this.nif,
        address: this.domicilio,
        phone: this.telefono,
        contact_person: this.persona_contacto,
        contact_person_position: this.cargo_contacto,
        password: this.supassword,
        password_confirmation: this.surepeatpassword,
      };
      
      fetch("https://wemfi.herokuapp.com/auth/register", {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
   
        if (response.status == 200) {
          this.email = this.suemail;
          this.password = this.supassword;
          this.logintoserve({email: this.suemail,password: this.supassword})
        } else {
          /*
          to do
          manejar el arreglo de errores
           */
          this.error_register = true;
        }
      });
    },
    validatelogin() {
      this.$refs.validlogin.validate();
    },
    validateregistro() {
      this.$refs.validregister.validate();
    },
    resetregistro() {
      this.$refs.validregister.reset();
    },
    async checkrol(token){

      let rol = null;
     await fetch("https://wemfi.herokuapp.com/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
           Authorization: "Bearer " + token,
        },
      }).then((response) => {
         return response.json()
      })
      .then((data) => {
       rol = data.user.role_id;
      })
      .catch((error) =>{
        console.log(error);
      })

      return rol;
    }
  },
};
</script>

<style>
div[data-app="true"] {
  background: url("../assets/blue-snow/blue-snow.png") repeat fixed !important;
  background-size: cover;
}
</style>