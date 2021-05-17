<template>
  <div>
    <Header/>
    
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name : 'Home',
  components : {
    Header,
    Footer
  }
}
</script>