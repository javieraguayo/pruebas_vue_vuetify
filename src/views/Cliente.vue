<template>
  <div>
    <Header/>
   <Table/>
  </div>
</template>

<script>
import Table from "@/components/Table";
import Header from "../components/Header";

export default {
  name: "Cliente",
  components: {
    Header,
    Table,
  },

  data: () => ({}),
};
</script>
