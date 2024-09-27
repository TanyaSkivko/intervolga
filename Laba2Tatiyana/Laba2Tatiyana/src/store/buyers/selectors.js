export const fetchItems = ( store ) => {
  const { dispatch } = store;
  dispatch('buyers/fetchItems');
};

export const selectItems = ( store ) => {
  const { getters } = store;
  return getters['buyers/items']
}

export const removeItem = ( store, id ) => {
  const { dispatch } = store;
  dispatch('buyers/removeItem', id);
}

export const addItem = ( store, { buyer, description } ) => {
  const { dispatch } = store;
  dispatch('buyers/addItem', { buyer, description });
}

export const updateItem = ( store, { id, buyer, description }) => {
  const { dispatch } = store;
  dispatch('buyers/updateItem', { id, buyer, description });
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['buyers/itemsByKey'][id] || {};
}
