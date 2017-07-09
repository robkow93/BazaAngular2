import { Uzytkownik } from './user'
import { TablicaOsob } from './all-users'
import { Injectable } from '@angular/core';


import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/tablicaOsob';  // URL to web api

  constructor(private http: Http) { }



  getUsers(): Promise<Uzytkownik[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Uzytkownik[]);
  }


  getUser(id: number): Promise<Uzytkownik> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Uzytkownik);
  }


//user: Uzytkownik

  stworz(imie: string, nazwisko: string, miejscowosc?: string): Promise<Uzytkownik> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({imie: imie, nazwisko:nazwisko, miejscowosc:miejscowosc}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Uzytkownik);
  }


/*
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

*/


}
