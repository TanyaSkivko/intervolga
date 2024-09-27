export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch('cars/fetchItems');
};

export const selectItems = (store) => {
  const { getters } = store;
  return getters['cars/items']
}

export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch('cars/removeItem', id);
}

export const addItem = (store, { name, surname, patronymic, buyer }) => {
  const { dispatch } = store;
  dispatch('cars/addItem', { name, surname, patronymic, buyer });
}

export const updateItem = (store, { id, name, surname, patronymic, buyer }) => {
  const { dispatch } = store;
  dispatch('cars/updateItem', { id,name, surname, patronymic, buyer });
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['cars/itemsByKey'][id] || {};
}
