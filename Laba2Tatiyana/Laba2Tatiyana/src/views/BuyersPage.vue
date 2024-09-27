<template>
  <Layout title="Машины">
    <BuyerList />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import BuyerList from '@/components/BuyerList/BuyerList.vue';

export default {
  name: 'BuyerPage',
  components: {
    Layout,
    BuyerList,
  }
}
</script>
