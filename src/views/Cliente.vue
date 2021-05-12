<template>
  <v-container>
    <h1>pagina de clientes</h1>
   <Table/>
  </v-container>
</template>

<script>

  import Table from '@/components/Table';

  export default {
    name: 'Cliente',
    components : {
     Table
    },

    data: () => ({
    
    }),
  }
</script>
