
import Api from '@/api/index';

class Buyers extends Api {


  buyers = () => this.rest('/buyers/list.json');
// {
//     method: 'GET',
//     'Content-Type': 'application/json',
//   });


  remove = ( id ) => this.rest('/buyers/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает


  add = ( buyer ) => this.rest('/buyers/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(buyer),
  }).then(() => ({...buyer, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает


  update = ( buyer ) => this.rest('/buyers/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(buyer),
  }).then(() => buyer) // then - заглушка, пока метод ничего не возвращает

}

export default new Buyers();
