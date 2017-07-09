import { Component, OnInit } from '@angular/core';
import { Uzytkownik } from '../user'
//import { TablicaOsob } from '../all-users'


import { UserService } from '../user.service'

import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private serwisPobranie:UserService, private serwisRoutera:Router) {  }

  uzytkownik:Uzytkownik;
  //uzytkownicy = TablicaOsob;
  uzytkownicy:Uzytkownik[];


/*
  zobaczSzczegoly(id:number):void{
    this.serwisRoutera.navigate(['/detail', id]);
  }

  zobaczSzczegoly2():void{
    this.serwisRoutera.navigate(['/detail', this.uzytkownik.id]);
  }
*/
  

  ngOnInit(): void {
    this.serwisPobranie.getUsers().then(pobraniUzytkownicy => this.uzytkownicy = pobraniUzytkownicy);
    //this.serwisPobranie.getUsers().then(pobraniUzytkownicy => this.uzytkownicy);  nie dziala

  }



   /*
    this.uzytkownik.id = 0;
    this.uzytkownik.imie = "";
    //this.uzytkownik.nazwisko = "";
    this.uzytkownik.nazwiso = "";
    this.uzytkownik.telefon= "";
    this.uzytkownik.miejscowosc= "";
    this.uzytkownik.ulica= "";
    this.uzytkownik.ulicanumer= "";
    this.uzytkownik.kodpocztowy= "";
    this.uzytkownik.dataurodzenia= ""; //new Date();
    this.uzytkownik.ulicamieszkanie = "";
*/
  

}

