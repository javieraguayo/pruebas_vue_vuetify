<template>
   <v-card>
          <v-card-title>
            <v-icon class="mr-2" large>mdi-account-group</v-icon>Clientes
            <v-spacer></v-spacer>
            <v-text-field class=""
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
            <template v-slot:item.action="{ item }">
          <div class="text-left">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon 
                  color="primary" 
                  @click="sendRequest(item)" 
                  elevation="3" 
                  v-bind="attrs" 
                  v-on="on"
                  class="mx-2">
                <v-icon>mdi-account-details</v-icon>
                </v-btn>
                </template>
                <span>Detalles</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon 
                  color="warning" 
                  @click="sendRequest(item)" 
                  elevation="3" 
                  v-bind="attrs" 
                  v-on="on">
                <v-icon>mdi-file-download</v-icon> 
                </v-btn>
                </template>
                <span>Descargar</span>
            </v-tooltip>
          </div>
      </template>
            <template v-slot:expanded-item="{ headers }">
                <td :colspan="headers.length">
                    <div class="row sp-details">
                        <div class="col-4 text-right">
                            <v-text-field
                              v-model="input1"
                              label="Label"
                            ></v-text-field>
                        </div>
                        <div class="col-4 text-right">
                            <v-text-field
                              v-model="input2"
                              label="Label 1"
                            ></v-text-field>
                        </div>
                        <div class="col-4 text-right">
                            <v-text-field
                              v-model="input3"
                              label="Label 2"
                            ></v-text-field>
                        </div>
                    </div>
                </td>
            </template>
          </v-data-table>
        </v-card>
</template>


<script>
  export default {
    data () {
    return {
      
      search: '',
      expanded: [],
      input1: '',
      input2: null,
      input3: null,
       footerProps: {'items-per-page-options': [15, 30, 50, 100]},
      headers: [
        {
          text: 'Rut',
          align: 'left',
          value: 'rut',
        },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Telefono', value: 'telefono' },
        { text: 'Correo', value: 'correo' },
        { text: 'Acciones', value: 'action' },
      ],
      clientes: [
        {
            rut: '14286042-2',
            nombre: 'Montse',
            apellido: 'Bustos',
            telefono: '+569776936749',
            correo: 'correo@gmail.com',
            
          },
          {
            rut: '10390068-9',
            nombre: 'Maximino',
            apellido: 'Solis',
            telefono: '+54976898754',
            correo: 'correo@gmail.com',
            
          },
          {
            rut: '5008046-3',
            nombre: 'Andoni',
            apellido: 'Abad',
            telefono: '+54932536473',
            correo :'correo@gmail.com' 
          },
          {
            rut: '14286043-2',
            nombre: 'Naia',
            apellido: 'Rodenas',
            telefono: '+56964540671',  
            correo :'correo@gmail.com'
          },
          {
            rut: '24555294-7',
            nombre: 'Feliciano',
            apellido: 'Salvador',
            telefono: '+54987456834',
            correo: 'correo@gmail.com',
          },
          {
            rut: '8453558-3',
            nombre: 'Nil',
            apellido: 'Castells',
            telefono: '+54965758594',
            correo: 'correo@gmail.com',
          },
          {
            rut: '7945055-3',
            nombre: 'Mateo',
            apellido: 'Revuelta',
            telefono: '+349765025038',
            correo: 'correo@gmail.com',
          },
          {
            rut: '15831415-0',
            nombre: 'Samuel',
            apellido: 'Flores',
            telefono: '+34965748453',
            correo: 'correo@gmail.com',
          },
          {
            rut: '7935946-7',
            nombre: 'Jesus',
            apellido: 'Villaverde',
            telefono: '+349755477321',
            correo: 'correo@gmail.com',
          },
          {
            rut: '15756094-8',
            nombre: 'Hugo',
            apellido: 'Alcala',
            telefono: '+349772130769',
            correo: 'correo@gmail.com',
          },
           {
            rut: '15756094-8',
            nombre: 'Ernesto',
            apellido: 'Yague',
            telefono: '+349642298713',
            correo: 'correo@gmail.com',
          },        
      ]
    }
  },
  methods: {
  sendRequest(rowData) {
    console.log(rowData)
  }
}

}
</script>

