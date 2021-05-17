<template>
  <div>
    <Header/>
   <Table/>
   <Footer/>
  </div>
</template>

<script>
import Table from "@/components/Table";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Cliente",
  components: {
    Header,
    Footer,
    Table,
  },

  data: () => ({}),
};
</script>
