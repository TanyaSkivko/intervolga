import Api from '@/api/index';

class Cars extends Api {


  cars = () => this.rest('/cars/list.json');

 // cars = () => this.rest('/cars/get-list.json')
  //     , {
  //   method: 'GET',
  //   'Content-Type': 'application/json',
  // });

  remove = ( id ) => this.rest('/cars/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает


  add = ( car ) => this.rest('/cars/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(car),
  }).then(() => ({...car, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает

  update = ( car ) => this.rest('/cars/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(car),
  }).then(() => car) // then - заглушка, пока метод ничего не возвращает

}

export default new Cars();
