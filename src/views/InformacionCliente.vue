<template>
  <div>
    <Header/>
    <FormularioEmpresa/>
    <Footer/>
  </div>
</template>

<script>

import Header from '../components/Header';
import Footer from '../components/Footer';
import FormularioEmpresa from '../components/FormularioEmpresa';


export default {
    name : 'InformacionCliente',
    components : {
    Header,
    Footer,
    FormularioEmpresa
  },

}   
</script>