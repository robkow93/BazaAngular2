import { Uzytkownik } from './user'

  export const TablicaOsob: Uzytkownik[] = [
    {
      id:1,
      imie: 'Robert', 
      nazwisko:'Kowalczyk',
      miejscowosc:'Warszawa',
      /*telefon:'502365489',
      miejscowosc:'Warszawa',
      ulica:'Magiera',
      ulicanumer:'1',
      kodpocztowy:'01-873',
      dataurodzenia: '1968-11-16'*/
    },
    {
      id:2,
      imie: 'Iza', 
      nazwisko:'Szczepaniuk',
      /*
      telefon:'807564529',
      miejscowosc:'Radzyń',
      ulica:'Podlaska',
      ulicanumer:'2',
      ulicamieszkanie:'10',
      kodpocztowy:'05-434',
      dataurodzenia: '1993-11-19' */
    }
  ];


  /*
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}


  */