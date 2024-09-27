<template>
  <Layout title="Отзывы">
    <CarList />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import CarList from '@/components/CarList/CarList.vue';

export default {
  name: 'Cars',
  components: {
    Layout,
    CarList,
  }
}
</script>
