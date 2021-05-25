<template>
  <v-container>
    <v-card class="mx-5 mt-3">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Cuenta de Resultados</v-stepper-step
          >
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2">
            Balance de Situacion</v-stepper-step
          >
          <v-divider></v-divider>
          <v-stepper-step step="3"> Cuestionario </v-stepper-step>
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
                    @change="selectdate()"
                    v-model="select_year"
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
                  <v-subheader
                    >Datos de la Cuenta de Resultados en Euros (€)</v-subheader
                  >
                </v-col>

                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Importe neto de la cifra de Negocio</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Prestaciones de servicios</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Compras de Mercaderías</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Compra de materias primas</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Compra de otros aprovisionamientos</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Trabajos realizados por otras Empresas</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Variación de Existencias Producto terminado</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Variación de Existencias Producto en curso</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Variación de Existencias de materia prima</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Sueldos y Salarios</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Gastos de Investigación y Desarrollo</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Arrendamientos y cánones</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Reparaciones y conservación</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Servicio de profesionales independientes</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Transportes</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Prima de Seguros</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Servicios Bancarios y similares</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Publicidad, propaganda y Relaciones públicas</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Suministros</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Otros Servicios</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Tributos</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Amortizaciones</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Provisiones</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Resultado Financiero</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Resultados extraordinarios</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Beneficio / (Pérdida) antes de Impuestos</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Impuestos</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-btn
              color="success"
              @click="
                e1 = 2;
                scrolltop();
              "
              class="mr-2"
            >
              Continuar <v-icon>mdi-skip-next</v-icon></v-btn
            >

            
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
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Patentes, marcas y similares</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Aplicaciones informáticas</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Desarrollo</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Maquinaria</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Utillaje</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader> Otras instalaciones</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Mobiliario</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Equipos procesos información</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Elementos Transporte</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Otro inmovilizado material</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Inversiones empresas del grupo y asoc.</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader> Fianzas</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Otros activos financieros, depósitos</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Activos por impuestos diferidos</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Materias primas</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Anticipos proveedores</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Productos terminado</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Clientes</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Clientes emp Grupo</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Admon pública</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Otros deudores</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Tesorería</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Inversiones Financieras C/P</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Periodificación</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Capital</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Reservas</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Resultados +/- ejercicios anteriores</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Otras aportaciones de socios</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Subvenciones oficiales recibidas</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Resultado del ejercicio</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Deudas con entidades de crédito</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Acreedores arrendamiento financiero</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Otras deudas LP</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Proveedores de inmovilizado</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Deudas con empresas del Grupo LP</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Impuesto diferido</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Periodificaciones LP</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Deudas con entidades de crédito a corto plazo</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Otro inmovilizado material</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Deudas con entidades de crédito Corto plazo</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>
                    Proveedores de inmovilizado Corto plazo</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Deudas Empresas Grupo a corto plazo</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Proveedores</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Proveedores, emp. Grupo</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Acreedores</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader
                    >Otras deudas, (rem pdtes pago, adm publicas)</v-subheader
                  >
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader> Anticipos de clientes</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-subheader>Periodificación</v-subheader>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <v-text-field
                    label=""
                    placeholder="Importe en Euros"
                    type="number"
                    value=""
                    prefix="€"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-btn
              class="mr-2"
              color="success"
              @click="
                e1 = 3;
                scrolltop();
              "
            >
              Continuar <v-icon>mdi-skip-next</v-icon>
            </v-btn>

            <v-btn
              text
              @click="
                e1 = 1;
                scrolltop();
              "
            >
              Volver
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-radio-group v-model="radios">
                    <template v-slot:label>
                      <div>
                        ¿La sociedad tiene de deudas que no figuran en el
                        balance, tales como pleitos o litigios pendientes?
                      </div>
                    </template>
                    <v-radio value="Si">
                      <template v-slot:label>
                        <div>Si</div>
                      </template>
                    </v-radio>
                    <v-radio value="No">
                      <template v-slot:label>
                        <div>No</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="radios">
                    <template v-slot:label>
                      <div>
                        ¿La sociedad tiene actualmente deudas pendientes de pago
                        con Hacienda?
                      </div>
                    </template>
                    <v-radio value="Si">
                      <template v-slot:label>
                        <div>Si</div>
                      </template>
                    </v-radio>
                    <v-radio value="No">
                      <template v-slot:label>
                        <div>No</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-radio-group v-model="radios">
                    <template v-slot:label>
                      <div>
                        ¿La sociedad tiene en la actualidad deudas pendientes
                        con la Seguridad Social?
                      </div>
                    </template>
                    <v-radio value="Si">
                      <template v-slot:label>
                        <div>Si</div>
                      </template>
                    </v-radio>
                    <v-radio value="No">
                      <template v-slot:label>
                        <div>No</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="radios">
                    <template v-slot:label>
                      <div>
                        ¿Tiene conocimiento de la existencia de deudas
                        pendientes con la Seguridad Social?
                      </div>
                    </template>
                    <v-radio value="Si">
                      <template v-slot:label>
                        <div>Si</div>
                      </template>
                    </v-radio>
                    <v-radio value="No">
                      <template v-slot:label>
                        <div>No</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-radio-group v-model="radios">
                    <template v-slot:label>
                      <div>
                        ¿La sociedad se encuentra incluida en algún fichero de
                        morosos, tales como ASNEF-EQUIFAX ó RAIT?
                      </div>
                    </template>
                    <v-radio value="Si">
                      <template v-slot:label>
                        <div>Si</div>
                      </template>
                    </v-radio>
                    <v-radio value="No">
                      <template v-slot:label>
                        <div>No</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="radios">
                    <template v-slot:label>
                      <div>
                        ¿Se encuentra la sociedad en situación pre concursal o
                        inmersa en concurso de acreedores?
                      </div>
                    </template>
                    <v-radio value="Si">
                      <template v-slot:label>
                        <div>Si</div>
                      </template>
                    </v-radio>
                    <v-radio value="No">
                      <template v-slot:label>
                        <div>No</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-radio-group v-model="radios">
                    <template v-slot:label>
                      <div>
                        Si la respuesta a la anterior pregunta es SI, el
                        procedimiento ha sido iniciado de forma voluntaria o
                        forzosa?
                      </div>
                    </template>
                    <v-radio value="Si">
                      <template v-slot:label>
                        <div>Voluntaria</div>
                      </template>
                    </v-radio>
                    <v-radio value="No">
                      <template v-slot:label>
                        <div>Forzosa</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="radios">
                    <template v-slot:label>
                      <div>
                        ¿Tiene la sociedad estados financieros auditados de los
                        dos ejercicios aportados?
                      </div>
                    </template>
                    <v-radio value="Si">
                      <template v-slot:label>
                        <div>Si</div>
                      </template>
                    </v-radio>
                    <v-radio value="No">
                      <template v-slot:label>
                        <div>No</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-radio-group v-model="radios">
                    <template v-slot:label>
                      <div>
                        ¿Cual es valor económico de su empresa en base al cual
                        vendería su negocio ó cual es el valor que Vd. tiene en
                        mente por el que vendería su negocio?
                      </div>
                    </template>
                    <v-col cols=6>
                      <div class="mr-5 mb-5">
                      <v-text-field
                        label="euros"
                        type="number"
                        value=""
                        prefix="€"
                        required
                      ></v-text-field>
                    </div>
                    </v-col>
                    
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-container>

            <v-btn color="success" class="mr-2">
              Finalizar <v-icon class="ml-1">mdi-check-bold</v-icon></v-btn
            >

            <v-btn
              text
              @click="
                e1 = 2;
                scrolltop();
              "
            >
              Volver
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "FormularioEmpresa",
  data() {
    return {
      e1: 1,
      radios: "Preguntas",
      years: ["2021", "2020", "2019", "2018"],
      last_year: null,
      select_year: null,
      showyear: false,
    };
  },
  methods: {
    //sumar y restar fechas de los encabezados de balance y cuenta
    selectdate() {
      //año actual
      /* now_year = this.select_year; */
      let date = this.select_year;
      let new_date = new Date(date, 0);
      new_date.setMonth(new_date.getMonth() - 12);
      this.last_year = new_date.getUTCFullYear();
      this.showyear = true;
    },
    scrolltop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>