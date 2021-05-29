<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-if="alertsave">
        <v-snackbar
          v-model="alertsave"
          :top="true"
          :right="true"
          color="success"
          transition="scroll-x-transition"
        >
          <v-icon>mdi-check-bold </v-icon> Guardado con exito

          <template v-slot:action="{ attrs }">
            <v-btn
              color="indigo"
              text
              v-bind="attrs"
              @click="alertsave = false"
            >
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
    <v-card class="mx-5 mt-5">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step
            :complete="e1 > 1"
            step="1"
            :rules="rulesStepperscuenta"
          >
            Cuenta de Resultados
            <small v-if="alertcuenta" class="red--text"
              >Faltan campos por completar
            </small>
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step
            :complete="e1 > 2"
            step="2"
            :rules="rulesSteppersbalance"
          >
            Balance de Situación
            <small v-if="alertbalance" class="red--text"
              >Faltan campos por completar</small
            >
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3" :rules="rulesStepperspreguntas">
            Cuestionario
            <small v-if="alertpreguntas" class="red--text"
              >Faltan campos por completar</small
            >
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-container fluid>
              <v-row class="mb-5">
                <v-col cols="12" sm="4" md="4" lg="4" class="mt-4">
                  <v-select
                    :items="years"
                    label="Último año cuentas oficiales Registro Mercantíl"
                    dense
                    v-model="select_year"
                    :disabled="disabled_preguntas"
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                  lg="4"
                  v-if="showyear"
                  class="mt-0"
                >
                  <v-subheader class="font-weight-bold d-flex justify-center">
                    <v-chip class="ma-2" color="primary">
                      <v-icon class="mr-2">mdi-calendar-today</v-icon>
                      {{ select_year }}
                    </v-chip>
                  </v-subheader>
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4" v-if="showyear">
                  <v-subheader class="font-weight-bold d-flex justify-center"
                    ><v-chip class="ma-2" color="primary">
                      <v-icon class="mr-2">mdi-calendar-arrow-right</v-icon>
                      {{ last_year }}
                    </v-chip>
                  </v-subheader>
                  <v-divider></v-divider>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="mb-2 pt-5">
                  <v-subheader class="font-weight-black"
                    >Datos de la Cuenta de Resultados en Euros (€)</v-subheader
                  >
                </v-col>
              </v-row>
              <v-form
                @submit.prevent=""
                id="id-form-cuenta"
                ref="validcuenta"
                v-model="validcuenta"
                lazy-validation
              >
                <v-row v-for="(item, index) in cuenta" :key="index">
                  <v-col cols="12" sm="4" md="4" lg="4">
                    <v-subheader>{{ item.label }}</v-subheader>
                  </v-col>
                  <template v-if="showyear">
                    <v-col
                      v-for="(year, i) in [select_year, last_year]"
                      :key="i"
                      cols="12"
                      sm="4"
                      md="4"
                      lg="4"
                    >
                      <vuetify-money
                        v-model="item.value[year]"
                        v-bind:label="vmoney.label"
                        v-bind:placeholder="vmoney.placeholder"
                        v-bind:readonly="vmoney.readonly"
                        v-bind:disabled="vmoney.disabled"
                        v-bind:outlined="vmoney.outlined"
                        v-bind:clearable="vmoney.clearable"
                        v-bind:valueWhenIsEmpty="vmoney.valueWhenIsEmpty"
                        v-bind:options="vmoney.options"
                        v-bind:properties="vmoney.properties"
                        :rules="[(v) => !!v || 'valor es requerido']"
                        required
                      />
                    </v-col>
                  </template>
                </v-row>
              </v-form>
            </v-container>

            <v-card-actions class="d-flex justify-end">
              <div v-if="ocultar_save">
                <v-btn
                  class="mr-2"
                  color="success"
                  @click="
                    validatecuenta();
                    savedata();
                  "
                  type="submit"
                  form="id-form-balance"
                >
                  Guardar <v-icon>mdi-content-save</v-icon>
                </v-btn>
              </div>
              <v-btn
                class="mr-2"
                color="primary"
                @click="
                  e1 = 2;
                  scrolltop();
                "
              >
                Continuar <v-icon>mdi-skip-next</v-icon>
              </v-btn>
            </v-card-actions>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-container fluid>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4"> </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="4"
                  lg="4"
                  v-if="showyear"
                  class="mt-0"
                >
                  <v-subheader class="font-weight-bold d-flex justify-center">
                    <v-chip class="ma-2" color="primary">
                      <v-icon class="mr-2">mdi-calendar-today</v-icon>
                      {{ select_year }}
                    </v-chip>
                  </v-subheader>
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4" v-if="showyear">
                  <v-subheader class="font-weight-bold d-flex justify-center"
                    ><v-chip class="ma-2" color="primary">
                      <v-icon class="mr-2">mdi-calendar-arrow-right</v-icon>
                      {{ last_year }}
                    </v-chip>
                  </v-subheader>
                  <v-divider></v-divider>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="mb-2 pt-5">
                  <v-subheader class="font-weight-black"
                    >Datos del balance de Situación de Resultados en Euros
                    (€)</v-subheader
                  >
                </v-col>
              </v-row>
              <v-form
                @submit.prevent=""
                id="id-form-balance"
                ref="validbalance"
                v-model="validbalance"
                lazy-validation
              >
                <v-row v-for="(item, index) in balance" :key="index">
                  <v-col cols="12" sm="4" md="4" lg="4">
                    <v-subheader>{{ item.label }}</v-subheader>
                  </v-col>
                  <template v-if="showyear">
                    <v-col
                      v-for="(year, i) in [select_year, last_year]"
                      :key="i"
                      cols="12"
                      sm="4"
                      md="4"
                      lg="4"
                    >
                      <vuetify-money
                        v-model="item.value[year]"
                        v-bind:label="vmoney.label"
                        v-bind:placeholder="vmoney.placeholder"
                        v-bind:readonly="vmoney.readonly"
                        v-bind:disabled="vmoney.disabled"
                        v-bind:outlined="vmoney.outlined"
                        v-bind:clearable="vmoney.clearable"
                        v-bind:valueWhenIsEmpty="vmoney.valueWhenIsEmpty"
                        v-bind:options="vmoney.options"
                        v-bind:properties="vmoney.properties"
                        :rules="[(v) => !!v || 'valor es requerido']"
                        required
                      />
                    </v-col>
                  </template>
                </v-row>
              </v-form>
            </v-container>

            <v-card-actions class="d-flex justify-space-between">
              <v-btn
                outlined
                @click="
                  e1 = 1;
                  scrolltop();
                "
                class="py-5"
              >
                <v-icon color="primary" large>mdi-arrow-left-circle</v-icon>
                Volver
              </v-btn>
              <div>
                <div v-if="ocultar_save">
                  <v-btn
                    class="mr-2"
                    color="success"
                    @click="
                      validatebalance();
                      savedata();
                    "
                    type="submit"
                    form="id-form-balance"
                  >
                    Guardar <v-icon>mdi-content-save</v-icon>
                  </v-btn>
                </div>

                <v-btn
                  class="mr-2"
                  color="primary"
                  @click="
                    e1 = 3;
                    scrolltop();
                  "
                >
                  Continuar <v-icon>mdi-skip-next</v-icon>
                </v-btn>
              </div>
            </v-card-actions>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-container fluid>
              <v-form
                @submit.prevent=""
                id="id-form-preguntas"
                ref="validpreguntas"
                v-model="validpreguntas"
                lazy-validation
              >
                <v-row v-for="(item, index) in preguntas" :key="index">
                  <v-col cols="12" v-if="index !== 'pregunta6'" disabled="true">
                    <v-radio-group v-model="item.radioGroup">
                      <template v-slot:label>
                        <div>
                          {{ item.label }}
                        </div>
                      </template>
                      <v-radio value="1" :disabled="disabled_preguntas">
                        <template v-slot:label>
                          <div>Si</div>
                        </template>
                      </v-radio>
                      <v-radio value="2" :disabled="disabled_preguntas">
                        <template v-slot:label>
                          <div>No</div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </v-col>

                  <v-col
                    cols="6"
                    v-if="item.radioGroup == 1 && index !== 'pregunta6'"
                  >
                    <vuetify-money
                      v-model="item.inputvalue"
                      v-bind:label="vmoney.label"
                      v-bind:placeholder="vmoney.placeholder"
                      v-bind:readonly="vmoney.readonly"
                      v-bind:disabled="vmoney.disabled"
                      v-bind:outlined="vmoney.outlined"
                      v-bind:clearable="vmoney.clearable"
                      v-bind:valueWhenIsEmpty="vmoney.valueWhenIsEmpty"
                      v-bind:options="vmoney.options"
                      v-bind:properties="vmoney.properties"
                      :rules="[(v) => !!v || 'valor es requerido']"
                      required
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-radio-group
                      v-model="preguntas.pregunta6.radioGroup"
                      v-if="
                        index === 'pregunta5' &&
                        preguntas.hasOwnProperty('pregunta5') &&
                        preguntas.pregunta5.radioGroup == 1
                      "
                    >
                      <template v-slot:label>
                        <div>
                          {{ item.label }}
                        </div>
                      </template>
                      <v-radio value="voluntaria">
                        <template v-slot:label>
                          <div>Voluntaria</div>
                        </template>
                      </v-radio>
                      <v-radio value="forsoza">
                        <template v-slot:label>
                          <div>Forsoza</div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-form>

              <v-row>
                <v-col cols="12">
                  <v-radio-group v-model="ultimapregunta.pregunta7.radioGroup">
                    <template v-slot:label>
                      <div>
                        ¿Tiene la sociedad estados financieros auditados de los
                        dos ejercicios aportados?
                      </div>
                    </template>
                    <v-radio value="1" :disabled="disabled_preguntas">
                      <template v-slot:label>
                        <div>Si</div>
                      </template>
                    </v-radio>
                    <v-radio value="2" :disabled="disabled_preguntas">
                      <template v-slot:label>
                        <div>No</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-radio-group>
                    <template v-slot:label>
                      <div>
                        ¿Cual es valor económico de su empresa en base al cual
                        vendería su negocio ó cual es el valor que Vd. tiene en
                        mente por el que vendería su negocio?
                      </div>
                    </template>
                    <v-col cols="6">
                      <div class="mr-5 mb-5">
                        <vuetify-money
                          v-model="ultimapregunta.valor_empresa"
                          v-bind:label="vmoney.label"
                          v-bind:placeholder="vmoney.placeholder"
                          v-bind:readonly="vmoney.readonly"
                          v-bind:disabled="vmoney.disabled"
                          v-bind:outlined="vmoney.outlined"
                          v-bind:clearable="vmoney.clearable"
                          v-bind:valueWhenIsEmpty="vmoney.valueWhenIsEmpty"
                          v-bind:options="vmoney.options"
                          v-bind:properties="vmoney.properties"
                          :rules="[(v) => !!v || 'valor es requerido']"
                          required
                        />
                      </div>
                    </v-col>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-container>

            <v-card-actions class="d-flex justify-space-between">
              <v-btn
                outlined
                class="py-5"
                @click="
                  e1 = 2;
                  scrolltop();
                "
              >
                <v-icon color="primary" large>mdi-arrow-left-circle</v-icon>
                Volver
              </v-btn>
              <div>
                <div v-if="ocultar_save">
                  <v-btn
                    class="mr-2"
                    color="success"
                    @click="
                      validatepreguntas();
                      savedata();
                    "
                    type="submit"
                    form="id-form-balance"
                  >
                    Guardar <v-icon>mdi-content-save</v-icon>
                  </v-btn>
                </div>
                <div v-if="ocultar_finalizar">
                  <v-btn color="primary" class="mr-2" @click="finalizar">
                    Finalizar <v-icon class="ml-1">mdi-check-bold</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card-actions>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "FormularioEmpresa",
  mounted: function () {
    const getUserDataUrl = "https://wemfi.herokuapp.com/v1/user-data-details";
    fetch(getUserDataUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.details === null) {
          this.crearInstancia();
        } else {
          this.getdata();
        }

        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      e1: 1,
      radios: "Preguntas",
      years: ["2021", "2020"],
      //last_year: null,
      select_year: "2021",
      //showyear: false,
      //validacion de form cuenta
      validcuenta: false,
      //validacion de form balance
      validbalance: false,
      //validacion preguntas form
      validpreguntas: false,
      //alert de wizard
      alertcuenta: false,
      alertbalance: false,
      alertpreguntas: false,
      //validacion stepper
      rulesStepperscuenta: [() => true],
      rulesSteppersbalance: [() => true],
      rulesStepperspreguntas: [() => true],
      //v-money
      vmoney: {
        value: "1",
        label: "euros",
        placeholder: "Importe en Euros",
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        valueWhenIsEmpty: "",
        options: {
          locale: "es",
          prefix: "€",
          suffix: "",
          length: 20,
          precision: 2,
        },
        properties: {
          hint: "",

          // You can add other v-text-field properties, here.
        },
      },
      alertsave: false,
      vertical: true,
      cuenta: {
        //campos de cuenta 54 campos
        importeneto_negocio: {
          label: "Importe neto de la cifra de Negocio",
          value: {},
        },
        prestaciones_servicios: {
          label: "Prestaciones de servicios",
          value: {},
        },
        compras_mercaderias: {
          label: "Compras de Mercaderías",
          value: {},
        },
        compra_materias_primas: {
          label: "Compra de Meterias Primas",
          value: {},
        },
        compra_aprovi: {
          label: "Compra de otros aprovisionamientos",
          value: {},
        },
        trabajos_realizados_empresas: {
          label: "Trabajos realizados por otras Empresas",
          value: {},
        },
        var_producto_terminado: {
          label: "Variación de Existencias Producto terminado",
          value: {},
        },
        var_existencia_producto_curso: {
          label: "Variación de Existencias Producto en curso",
          value: {},
        },
        variacion_existencias_materia_prima: {
          label: "Variación de Existencias de materia prima",
          value: {},
        },
        sueldos_salarios: {
          label: "Sueldos y Salarios",
          value: {},
        },
        gastos_investigacion_desarrollo: {
          label: "Gastos de Investigación y Desarrollo",
          value: {},
        },
        arrendamientos_canones: {
          label: "Arrendamientos y cánones",
          value: {},
        },
        reparaciones_conservacion: {
          label: "Reparaciones y conservación",
          value: {},
        },
        servicio_profesionales_independientes: {
          label: "Servicio de profesionales independientes",
          value: {},
        },
        transportes: {
          label: "Transportes",
          value: {},
        },
        prima_seguros: {
          label: "Prima de seguros",
          value: {},
        },
        servicios_bancarios_similares: {
          label: "Servicios Bancarios y similares",
          value: {},
        },
        publicidad: {
          label: "Publicidad, propaganda y Relaciones públicas",
          value: {},
        },
        suministros: {
          label: "Suministros",
          value: {},
        },
        otros_servicios: {
          label: "Otros Servicios",
          value: {},
        },
        tributos: {
          label: "Tributos",
          value: {},
        },
        amortizaciones: {
          label: "Amortizaciones",
          value: {},
        },
        provisiones: {
          label: "Provisiones",
          value: {},
        },
        resultado_financiero: {
          label: "Resultado Financiero",
          value: {},
        },
        resultados_extraordinarios: {
          label: "Resultados extraordinarios",
          value: {},
        },
        beneficio_perdida: {
          label: "Beneficio / (Pérdida) antes de Impuestos",
          value: {},
        },
        Impuestos: {
          label: "Impuestos",
          value: {},
        },
      },

      balance: {
        //campos de registro 47 * 2 94 campos
        patentes: {
          label: "Patentes, marcas y similares",
          value: {},
        },
        app_informaticas: {
          label: "Aplicaciones informáticas",
          value: {},
        },
        desarrollo: {
          label: "Desarrollo",
          value: {},
        },
        maquinaria: {
          label: "Maquinaria",
          value: {},
        },
        utillaje: {
          label: "Utillaje",
          value: {},
        },
        otras_instalaciones: {
          label: "Otras instalaciones",
          value: {},
        },
        mobiliario: {
          label: "Mobiliario",
          value: {},
        },
        equipos_procesos: {
          label: "Equipos procesos información",
          value: {},
        },
        elementos_transporte: {
          label: "Elementos Transporte",
          value: {},
        },

        inversiones_empresas_grupo: {
          label: "Inversiones empresas del grupo y asoc.",
          value: {},
        },
        fianzas: {
          label: "Fianzas",
          value: {},
        },
        otros_activos_financieros: {
          label: "Otros activos financieros, depósitos",
          value: {},
        },
        activos_por_impuestos_diferidos: {
          label: "Activos por impuestos diferidos",
          value: {},
        },
        materias_primas: {
          label: "Materias primas",
          value: {},
        },
        anticipos_proveedores: {
          label: "Anticipos proveedores",
          value: {},
        },
        productos_terminado: {
          label: "Productos terminado",
          value: {},
        },
        clientes: {
          label: "Clientes",
          value: {},
        },
        clientes_emp_grupo: {
          label: "Clientes emp Grupo",
          value: {},
        },
        admin_publica: {
          label: "Admin pública",
          value: {},
        },
        otros_deudores: {
          label: "Otros deudores",
          value: {},
        },
        tesoreria: {
          label: "Tesorería",
          value: {},
        },
        inversiones_financieras: {
          label: "Inversiones Financieras C/P",
          value: {},
        },
        periodificacion: {
          label: "Periodificación",
          value: {},
        },
        capital: {
          label: "Capital",
          value: {},
        },
        reservas: {
          label: "Reservas",
          value: {},
        },
        resultados_ejercicios_anteriores: {
          label: "Resultados +/- ejercicios anteriores",
          value: {},
        },
        otras_aportaciones_socios: {
          label: "Resultados +/- ejercicios anteriores",
          value: {},
        },
        subvenciones_oficiales: {
          label: "Subvenciones oficiales recibidas",
          value: {},
        },
        resultado_ejercicio: {
          label: "Resultado del ejercicio",
          value: {},
        },
        deudas_con_entidades_credito: {
          label: "Deudas con entidades de crédito",
          value: {},
        },
        acreedores_arrendamiento: {
          label: "Acreedores arrendamiento financiero",
          value: {},
        },
        otras_deudas_lp: {
          label: "Otras deudas LP",
          value: {},
        },
        proveedores_inmovilizado: {
          label: "Proveedores de inmovilizado",
          value: {},
        },
        deudas_empresas_grupo_lp: {
          label: "Deudas con empresas del Grupo LP",
          value: {},
        },
        impuesto_diferido: {
          label: "Impuesto diferido",
          value: {},
        },
        periodificaciones_lp: {
          label: "Periodificaciones LP",
          value: {},
        },
        deudas_entidades_credito_corto: {
          label: "Deudas con entidades de crédito a corto plazo",
          value: {},
        },
        proveedores_inmovilizado_corto: {
          label: "Proveedores de inmovilizado Corto plazo",
          value: {},
        },
        deudas_empresas_grupo: {
          label: "Deudas Empresas Grupo a corto plazo",
          value: {},
        },
        proveedores: {
          label: "Proveedores",
          value: {},
        },
        proveedores_grupo: {
          label: "Proveedores, emp. Grupo",
          value: {},
        },
        acreedores: {
          label: "Acreedores",
          value: {},
        },
        otras_deudas: {
          label: "Otras deudas, (rem pdtes pago, adm publicas)",
          value: {},
        },
        anticipos_clientes: {
          label: "Anticipos de clientes",
          value: {},
        },
        //campos de cuestionario
      },
      //1 si 2 no
      preguntas: {
        pregunta1: {
          label:
            "¿La sociedad tiene de deudas que no figuran en el balance, tales como pleitos o litigios pendientes?",
          radioGroup: null,
          inputvalue: null,
        },
        pregunta2: {
          label:
            "¿La sociedad tiene actualmente deudas pendientes de pago con Hacienda?",
          radioGroup: null,
          inputvalue: null,
        },
        pregunta3: {
          label:
            "¿La sociedad tiene en la actualidad deudas pendientes con la Seguridad Social?",
          radioGroup: null,
          inputvalue: null,
        },
        pregunta4: {
          label:
            "¿La sociedad se encuentra incluida en algún fichero de morosos, tales como ASNEF-EQUIFAX ó RAI?",
          radioGroup: null,
          inputvalue: null,
        },
        pregunta5: {
          label:
            "¿Se encuentra la sociedad en situación pre concursal o inmersa en concurso de acreedores?",
          radioGroup: null,
          inputvalue: null,
        },
        pregunta6: {
          label:
            "Si la respuesta a la anterior pregunta es SI, el procedimiento ha sido iniciado de forma voluntaria o forzosa?",
          radioGroup: null,
          inputvalue: null,
        },
      },
      //ultimas preguntas
      ultimapregunta: {
        pregunta7: {
          label:
            "¿Tiene la sociedad estados financieros auditados de los dos ejercicios aportados?",
          radioGroup: null,
          inputvalue: null,
        },
        valor_empresa: null,
      },
      disabled_preguntas: false,
      //ocultar save en status 2
      ocultar_save: true,
      //ocular finalizar
      ocultar_finalizar: true,
    };
  },
  methods: {
    scrolltop() {
      window.scrollTo(0, 0);
    },
    //guardar
    savedata() {
    
        var json = {
          cuenta: this.cuenta,
          balance: this.balance,
          preguntas: Object.keys(this.preguntas).map((pregunta) => {
            return {
              [pregunta]: {
                [pregunta]: this.preguntas[pregunta].radioGroup,
                inputvalue: this.preguntas[pregunta].inputvalue,
              },
            };
          }),

          ultimapregunta: {
            pregunta7: {
              label: this.ultimapregunta.pregunta7.label,
              radioGroup: this.ultimapregunta.pregunta7.radioGroup,
            },
            valor_empresa: this.ultimapregunta.valor_empresa,
          },
        };

        fetch("https://wemfi.herokuapp.com/v1/user-data-details", {
          method: "PUT",
          body: JSON.stringify({ step: this.e1, json }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then((response) => {
          return response
            .json()
            .then((data) => {
           
              if (data.ok) {
                this.alertsave = true;
                setTimeout(() => {
                  this.alertsave = false;
                }, 4000);
              }
            })
            .catch((err) => {
              console.log(err);
              this.error = true;
            });
        });
      
    },
    crearInstancia() {
      fetch("https://wemfi.herokuapp.com/v1/user-data-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((response) => {
        return response
          .json()
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
            this.error = true;
          });
      });
    },
    getdata() {
      fetch("https://wemfi.herokuapp.com/v1/user-data-details", {
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
       

          if (Object.keys(data.details.json).length > 0) {
            this.showdata(data);
          } else if(data.details.status === 0){
            
            this.resetformcuenta();
            this.resetformbalance();
            this.resetformpreguntas();
            
          }
          //cuando el usuario es estado 2 ya completo los formularios
          if (data.details.status === 2) {
            this.vmoney.disabled = true;
            this.disabled_preguntas = true;
            this.ocultar_save = false;
            this.ocultar_finalizar = false;
          }
        })
        .catch((err) => {
          console.log(err);
          this.error = true;
        })
        .finally(() => {
          this.validatecuenta();
          this.validatebalance();
        });
    },
    showdata(data) {
      //carga los datos
      const self = this;
      this.cuenta = data.details.json.cuenta;
      this.balance = data.details.json.balance;
      //itera la pregunta
      data.details.json.preguntas.forEach((pregunta) => {
        const key = Object.keys(pregunta);

        self.preguntas[key].radioGroup = pregunta[key][key];
        self.preguntas[key].inputvalue = pregunta[key].inputvalue;
      });
      this.e1 = data.details.step;
      this.ultimapregunta = data.details.json.ultimapregunta;
    },

    finalizar() {
      const v_cuenta = this.$refs.validcuenta.validate();
      const v_balance = this.$refs.validbalance.validate();
      const v_preguntas = this.$refs.validpreguntas.validate();
      //validamos que los 3 forms estan correctos antes de finalizar
      if (v_cuenta === true && v_balance === true && v_preguntas === true) {
        fetch("https://wemfi.herokuapp.com/v1/finish", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then((response) => {
          return response
            .json()
            .then((data) => {
              console.log(data);
             
            
              this.vmoney.disabled = true;
              this.disabled_preguntas = true;
             
            })
            .catch((err) => {
              console.log(err);
              this.error = true;
            });
        });
      } else {
        alert("faltan formularios");
      }
    },
    validatecuenta() {
      //muestra alertas en los tabs steeps del form cuenta
      const valid = this.$refs.validcuenta.validate();

      if (valid) {
        this.rulesStepperscuenta = [() => true];
        this.alertcuenta = false;
      } else {
        this.rulesStepperscuenta = [() => false];
        this.alertcuenta = true;
      }
    },
    validatebalance() {
      const valid = this.$refs.validbalance.validate();

      if (valid) {
        this.rulesSteppersbalance = [() => true];
        this.alertbalance = false;
      } else {
        this.rulesSteppersbalance = [() => false];
        this.alertbalance = true;
      }
    },
    validatepreguntas() {
      const valid = this.$refs.validpreguntas.validate();

      if (valid) {
        this.rulesStepperspreguntas = [() => true];
        this.alertpreguntas = false;
      } else {
        this.rulesStepperspreguntas = [() => false];
        this.alertpreguntas = true;
      }
    },
    /* resetValidationCuenta() {
      this.$refs.validcuenta.resetValidation();
    },
    resetValidationBalance() {
      this.$refs.validbalance.resetValidation();
    }, */
    resetformcuenta() {
      //borra los campos y su validacion
      this.$refs.validcuenta.reset();
    },
    resetformbalance() {
      //borra los campos y su validacion
      this.$refs.validbalance.reset();
    },
    resetformpreguntas() {
      //borra los campos y su validacion
      this.$refs.validpreguntas.reset();
    },
  },
  computed: {
    showyear() {
      return this.select_year !== null;
    },
    last_year() {
      if (this.select_year) {
        return Number(this.select_year) - 1;
      }
      return null;
    },
  },
};
</script>