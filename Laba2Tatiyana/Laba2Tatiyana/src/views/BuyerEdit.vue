<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <BuyerForm
        :id="id"
        @submit="onSubmit"
    />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/buyers/selectors';
import Layout from '@/components/Layout/Layout';
import BuyerForm from '@/components/BuyerForm/BuyerForm.vue';
export default {
  name: 'BuyerEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    BuyerForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, buyer, description }) => id ?
          updateItem(store, { id, buyer, description }) :
          addItem(store, { buyer, description }),
    };
  }
}
</script>

