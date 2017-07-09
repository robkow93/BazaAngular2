//import { Uzytkownik } from './user'
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tablicaOsob = [
      { id: 1,  imie: 'Robert', nazwisko:'Kowalczyk', miejscowosc:'Warszawa' },
      { id: 2,  imie: 'Iza',    nazwisko:'Szczepaniuk'}
    ];
    return {tablicaOsob};
  }
}









