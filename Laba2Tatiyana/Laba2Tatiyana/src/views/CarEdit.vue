<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <CarForm @submit="onSubmit" :id="id"  />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/cars/selectors';
import CarForm from '@/components/CarForm/CarForm.vue';
import Layout from '@/components/Layout/Layout';

export default {
  name: 'CarEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    CarForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, name, surname, patronymic, buyer }) => id ?
          updateItem(store, { id, name, surname, patronymic, buyer }) :
          addItem(store, { name, surname, patronymic, buyer } )
    }
  }

}
</script>

