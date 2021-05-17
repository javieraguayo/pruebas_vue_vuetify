<template>
  <v-container>
    <v-card class="mx-5 mt-3">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1"> Cuenta </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2"> Balance </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"> Cuestionario </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-container fluid>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Importe neto de la cifra de Negocio"
                    type="number"
                    value="10.00"
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Prestaciones de servicios"
                    type="number"
                    value="10.00"
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Compras de Mercaderías"
                    type="number"
                    value="10.00"
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Compra de materias primas"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Compra de otros aprovisionamientos"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Trabajos realizados por otras Empresas"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Variación de Existencias Producto terminado"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Variación de Existencias Producto en curso"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Variación de Existencias de materia prima"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Sueldos y Salarios"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Gastos de Investigaciónb y Desarrollo"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Arrendamientos y cánones"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Reparaciones y conservación"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Servicio de profesionales independientes"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Transportes"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Prima de Seguros"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Servicios Bancarios y similares"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Publicidad, propaganda y Relaciones públicas"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Suministros"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Otros Servicios"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Tributos"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Amortizaciones"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Provisiones"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Resultado Financiero"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Resultados extraordinarios"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Beneficio / (Pérdida) antes de Impuestos"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Impuestos"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-btn color="primary" @click="e1 = 2"> Continuar </v-btn>

            <v-btn text> Cancelar </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-container fluid>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Patentes, marcas y similares"
                    type="number"
                    value="10.00"
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Aplicaciones informáticas"
                    type="number"
                    value="10.00"
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Desarrollo"
                    type="number"
                    value="10.00"
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Maquinaria"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Utillaje"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Otras instalaciones"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Mobiliario"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Equipos procesos información"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Elementos transporte"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Otro inmovilizado material"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Inversiones empresas del grupo y asoc."
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Fianzas"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Otros activos financieros, depósitos"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Activos por impuestos diferidos"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Materias primas"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Anticipos proveedores"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Productos terminado"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Clientes"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Clientes emp Grupo"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="administración pública"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Otros deudores"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Tesorería"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Inversiones Financieras C/P"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Capital"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Reservas"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Resultados +/- ejercicios anteriores"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Otras aportaciones de socios"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Subvenciones oficiales recibidas"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Resultado del ejercicio"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Deudas con entidades de crédito"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Acreedores arrendamiento financiero"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Otras deudas LP"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Proveedores de inmovilizado"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Deudas con empresas del Grupo LP"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Impuesto diferido"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Periodificaciones LP"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Deudas con entidades de crédito a corto plazo"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Deudas Empresas Grupo a corto plazo"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Proveedores"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Proveedores, emp. Grupo"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Acreedores"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Otras deudas, (rem pdtes pago, adm publicas)"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Anticipos de clientes"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Periodificación"
                    type="number"
                    value=""
                    prefix="€"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-btn color="primary" @click="e1 = 3"> Continuar </v-btn>

            <v-btn text> Cancelar </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-container fluid>
              <v-row>
                <v-col cols="6">
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
                <v-col cols="6">
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
                <v-col cols="6">
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
                <v-col cols="6">
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
                <v-col cols="6">
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
                <v-col cols="6">
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
                <v-col cols="6">
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
                <v-col cols="6">
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
              </v-row>
            </v-container>

            <v-btn color="success" @click="e1 = 1"> Guardar </v-btn>

            <v-btn text> Cancelar </v-btn>
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
    };
  },
};
</script>