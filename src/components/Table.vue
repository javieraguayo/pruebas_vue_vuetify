<template>
  <v-container>
    <v-card class="mx-5 mt-3">
      <v-card-title>
        <v-icon class="mr-2" large>mdi-account-group</v-icon>Clientes
        <v-spacer></v-spacer>
        <v-text-field
          class=""
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="clientes"
        :expanded.sync="expanded"
        show-expand
        single-expand
        item-key="rut"
        :search="search"
        :items-per-page="10"
      >
        <template v-slot:item.action="">
          <div class="text-left">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  color="primary"
                  elevation="3"
                  v-bind="attrs"
                  v-on="on"
                  class="mx-2"
                  @click="dialog = true; getdata()"
                >
                  <v-icon>mdi-account-details</v-icon>
                </v-btn>
              </template>
              <span>Detalles</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="">
                <!-- <v-btn
                  icon
                  color="warning"
                  @click="sendRequest(item)"
                  elevation="3"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-file-download</v-icon>
                </v-btn> -->
              </template>
              <span>Descargar</span>
            </v-tooltip>
          </div>
        </template>
        <template v-slot:expanded-item="{ headers }">
          <td :colspan="headers.length" >
            <div class="row sp-details text-center">
              <div class="col-3">
                <div class="text--primary">
                  €800.000<br />
                  Importe neto de la cifra de Negocio
                </div>
              </div>
              <div class="col-3">
                <div class="text--primary">
                  €800.000<br />
                  Prestaciones de servicios
                </div>
              </div>
              <div class="col-3">
                <div class="text--primary">
                  €800.000<br />
                  Compras de Mercaderías
                </div>
              </div>
              <div class="col-3">
                <div class="text--primary">
                  €800.000<br />
                  Compra de materias primas
                </div>
              </div>
              <div class="col-3">
                <div class="text--primary">
                  €800.000<br />
                  Compra de otros aprovisionamientos
                </div>
              </div>
              <div class="col-3">
                <div class="text--primary">
                  €800.000<br />
                  Trabajos realizados por otras Empresas
                </div>
              </div>
              <div class="col-3">
                <div class="text--primary">
                  €800.000<br />
                  Variación de Existencias Producto terminado
                </div>
              </div>
              <div class="col-3">
                <div class="text--primary">
                  €800.000<br />
                  Variación de Existencias Producto en curso
                </div>
              </div>
            </div>
          </td>
        </template>
      </v-data-table>
    </v-card>
    <!-- Modal-->
    <v-dialog v-model="dialog" width="800">
      <v-card>
        <v-card-title
          >Último año cuentas oficiales Registro Mercantíl 2021</v-card-title
        >
        <v-tabs>
          <v-tab>
            <v-icon class="mr-2"> mdi-abacus </v-icon>
            Cuenta de Resultados
          </v-tab>
          <v-tab>
            <v-icon class="mr-2"> mdi-scale-balance </v-icon>
            Balance de Situación
          </v-tab>
          <v-tab>
            <v-icon class="mr-2"> mdi-message-question </v-icon>
            Cuestionario
          </v-tab>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-card-subtitle
                  >Datos de la Cuenta de Resultados en Euros
                  (€)</v-card-subtitle
                >
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Item</th>
                        <th class="text-left">2021</th>
                        <th class="text-left">2020</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in data_cliente.cuenta" :key="index">
                        <td>{{item.label}}</td>
                        <template v-if="Object.keys(item.value).length > 1">
                          <td>{{item.value["2021"]}}</td>
                          <td>{{item.value["2020"]}}</td>
                        </template>
                        <template v-else>
                          <td>No hay datos</td>
                          <td>No hay datos</td>
                        </template>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-card-subtitle
                  >Datos del balance de Situación de Resultados en Euros (€)</v-card-subtitle>
              </v-card-text>

              <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Item</th>
                        <th class="text-left">2021</th>
                        <th class="text-left">2020</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in data_cliente.balance" :key="index">
                        <td>{{item.label}}</td>
                        <template v-if="Object.keys(item.value).length > 1">
                          <td>{{item.value["2021"]}}</td>
                          <td>{{item.value["2020"]}}</td>
                        </template>
                        <template v-else>
                          <td>No hay datos</td>
                          <td>No hay datos</td>
                        </template>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                 <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Item</th>
                        <th class="text-left">Respuesta</th>
                      
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,index) in data_cliente.preguntas" :key="index">
                        <td>{{ JSON.stringify(item.pregunta1) }}</td>
                        <td>{{ item.value }}</td>
                      </tr>

                      <!-- <tr v-for="item in data_cliente.pre" :key="item">
                        <td>{{item.label}}</td>
                        <template v-if="Object.keys(item.value).length > 1">
                          <td>{{item.value["2021"]}}</td>
                          <td>{{item.value["2020"]}}</td>
                        </template>
                        <template v-else>
                          <td>No hay datos</td>
                          <td>No hay datos</td>
                        </template>
                      </tr> -->
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" depressed color="error">
            <v-icon>mdi-close</v-icon>Cerrar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Modal-->
  </v-container>
</template>


<script>
export default {
  mounted: function () {
    this.getclientes();
  },
  data() {
    return {
      name : "Table",
      search: "",
      expanded: [],
      dialog: false,
      footerProps: { "items-per-page-options": [15, 30, 50, 100] },
      headers: [
        
        { text: "Nombre", value: "firstname" },
        { text: "Apellido", value: "fullname" },
        { text: "Correo", value: "email" },
        { text: "Acciones", value: "action" },
      ],
      clientes: [],
      data_cliente : {
        cuenta : {},
        balance : {},
        preguntas: {}
      },
    
      tab: null,
      items: ["Cuenta de Resultados", "Balance de Situación", "Cuestionario"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      cuentas: [
        {
          text: "Importe neto de la cifra de Negocio",
          value: "€500.000",
        },
        {
          text: "Prestaciones de servicios",
          value: "€700.000",
        },
        {
          text: "Compras de Mercaderías",
          value: "€250.000",
        },
        {
          text: "Compra de materias primas",
          value: "€450.000",
        },
        {
          text: "Compra de otros aprovisionamientos",
          value: "€650.000",
        },
        {
          text: "Trabajos realizados por otras Empresas",
          value: "€50.000",
        },
        {
          text: "Variación de Existencias Producto terminado ",
          value: "€20.000",
        },
        {
          text: "Variación de Existencias Producto en curso",
          value: "€27.000",
        },
        {
          text: "Variación de Existencias de materia prima",
          value: "€15.000",
        },
        {
          text: "Sueldos y Salarios",
          value: "€875.000",
        },
        {
          text: "Gastos de Investigaciónb y Desarrollo",
          value: "€1.875.000",
        },
        {
          text: "Arrendamientos y cánones",
          value: "€1.275.000",
        },
        {
          text: "Reparaciones y conservación",
          value: "€225.000",
        },
        {
          text: "Servicio de profesionales independientes",
          value: "€125.000",
        },
        {
          text: "Transportes",
          value: "€325.000",
        },
        {
          text: "Prima de Seguros",
          value: "€505.000",
        },
        {
          text: "Servicios Bancarios y similares",
          value: "€245.000",
        },
        {
          text: "Publicidad, propaganda y Relaciones públicas",
          value: "€645.000",
        },
        {
          text: "Suministros",
          value: "€345.000",
        },
        {
          text: "Otros Servicios",
          value: "€945.000",
        },
        {
          text: "Tributos",
          value: "€5.000",
        },
        {
          text: "Amortizaciones",
          value: "€45.000",
        },
        {
          text: "Provisiones",
          value: "€25.000",
        },
        {
          text: "Resultado Financiero",
          value: "€25.000",
        },
        {
          text: "Resultados extraordinarios",
          value: "€25.000",
        },
        {
          text: "Beneficio / (Pérdida) antes de Impuestos",
          value: "€125.000",
        },
        {
          text: "Impuestos",
          value: "€325.000",
        },
      ],
      balances: [
        {
          text: "Patentes, marcas y similares",
          value: "€225.000",
        },
        {
          text: "Aplicaciones informáticas",
          value: "€174.000",
        },
        {
          text: "Desarrollo",
          value: "€177.000",
        },
        {
          text: "Maquinaria ",
          value: "€572.000",
        },
        {
          text: "Utillaje",
          value: "€672.000",
        },
        {
          text: "Otras instalaciones",
          value: "€372.000",
        },
        {
          text: "Mobiliario",
          value: "€262.000",
        },
        {
          text: "Equipos procesos información",
          value: "€222.000",
        },
        {
          text: "Elementos transporte",
          value: "€862.000",
        },
        {
          text: "Otro inmovilizado material",
          value: "€312.000",
        },
        {
          text: "Inversiones empresas del grupo y asoc.",
          value: "€162.000",
        },
        {
          text: "Fianzas",
          value: "€162.000",
        },
        {
          text: "Otros activos financieros, depósitos",
          value: "€162.000",
        },
        {
          text: "Activos por impuestos diferidos",
          value: "€162.000",
        },
        {
          text: "Materias primas ",
          value: "€162.000",
        },
        {
          text: "Anticipos proveedores",
          value: "€162.000",
        },
        {
          text: "Productos terminado",
          value: "€162.000",
        },
        {
          text: "Clientes",
          value: "€162.000",
        },
        {
          text: "Clientes emp Grupo",
          value: "€162.000",
        },
        {
          text: "administración pública",
          value: "€162.000",
        },
        {
          text: "Otros deudores",
          value: "€162.000",
        },
        {
          text: "Tesorería",
          value: "€162.000",
        },
        {
          text: "Inversiones Financieras C/P",
          value: "€162.000",
        },
        {
          text: "Capital",
          value: "€162.000",
        },
        {
          text: "Reservas",
          value: "€162.000",
        },
        {
          text: "Resultados +/- ejercicios anteriores",
          value: "€162.000",
        },
        {
          text: "Otras aportaciones de socios",
          value: "€162.000",
        },
        {
          text: "Subvenciones oficiales recibidas",
          value: "€162.000",
        },
        {
          text: "Resultado del ejercicio",
          value: "€162.000",
        },
        {
          text: "Deudas con entidades de crédito",
          value: "€162.000",
        },
        {
          text: "Acreedores arrendamiento financiero",
          value: "€162.000",
        },
        {
          text: "Otras deudas LP",
          value: "€162.000",
        },
        {
          text: "Proveedores de inmovilizado",
          value: "€162.000",
        },
        {
          text: "Deudas con empresas del Grupo LP",
          value: "€162.000",
        },
        {
          text: "Impuesto diferido",
          value: "€162.000",
        },
        {
          text: "Periodificaciones LP",
          value: "€162.000",
        },
        {
          text: "Deudas con entidades de crédito a corto plazo",
          value: "€162.000",
        },
        {
          text: "   Deudas Empresas Grupo a corto plazo",
          value: "€162.000",
        },
        {
          text: "Proveedores",
          value: "€162.000",
        },
        {
          text: "Proveedores, emp. Grupo",
          value: "€162.000",
        },
        {
          text: "Acreedores",
          value: "€162.000",
        },
        {
          text: "Otras deudas, (rem pdtes pago, adm publicas)   ",
          value: "€162.000",
        },
        {
          text: "Anticipos de clientes",
          value: "€162.000",
        },
        {
          text: "Periodificación",
          value: "€162.000",
        },

      ],
      preguntas: [
        {
          text:
            "¿La sociedad tiene de deudas que no figuran en el balance, tales como pleitos o litigios pendientes?",
          value: "Si",
          icon: "",
        },
        {
          text:
            "¿La sociedad tiene actualmente deudas pendientes de pago con Hacienda?",
          value: "Si",
          icon: "",
        },
        {
          text: "¿La sociedad tiene en la actualidad deudas pendientes con la Seguridad Social?",
          value: "Si",
          icon: "",
        },
         {
          text: "¿Tiene conocimiento de la existencia de deudas pendientes con la Seguridad Social?",
          value: "Si",
          icon: "",
        },
         {
          text: "¿La sociedad se encuentra incluida en algún fichero de morosos, tales como ASNEF-EQUIFAX ó RAIT?",
          value: "Si",
          icon: "",
        },
         {
          text: "¿¿Se encuentra la sociedad en situación pre concursal o inmersa en concurso de acreedores?",
          value: "Si",
          icon: "",
        },
         {
          text: "Si la respuesta a la anterior pregunta es SI, el procedimiento ha sido iniciado de forma voluntaria o forzosa?",
          value: "Si",
          icon: "",
        },
         {
          text: "¿Tiene la sociedad estados financieros auditados de los dos ejercicios aportados?",
          value: "Si",
          icon: "",
        },
      ],
    };
  },
  methods: {
    sendRequest(rowData) {
      console.log(rowData);
    },
    getclientes(){
      fetch("https://wemfi.herokuapp.com/v1/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
           Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((response) => {
         return response.json()
      })
      .then((data) => {
        console.log(data);
        this.clientes = data.users;
     
      })
      .catch((error) =>{
        console.log(error);
      })
    },
    getdata() {
      //trae los datos de los clientes
    console.log("entro a getdata");
    const self = this;
      fetch("https://wemfi.herokuapp.com/v1/users/2", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("HTTP status " + response.status);
          }
          return response.json();
        })
        .then((data) => {
          self.data_cliente.cuenta = data.user.user_data.json.cuenta;
          self.data_cliente.balance = data.user.user_data.json.balance;
          self.data_cliente.preguntas = data.user.user_data.json.preguntas;
           this.$forceUpdate();

           console.log(self.data_cliente);
        }).catch(e => {
          console.log(e);
        })
        
    },
  },
};
</script>

