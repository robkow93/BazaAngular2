import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Uzytkownik } from '../user'
import { Router } from '@angular/router';

import { UserService } from '../user.service'

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private serwisRoutera:Router, private serwisWysylanie:UserService) { 
  }
  
  uzytkownicyBazy:Uzytkownik[];

  getUsers(): void {
    this.serwisWysylanie
        .getUsers() //metoda serwisu o tej saej nazwie
        .then(bazaOsob => this.uzytkownicyBazy = bazaOsob);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSubmit(imie: string, nazwisko: string, miejscowosc: string ): void{
    imie = imie.trim();
    nazwisko = nazwisko.trim();
    miejscowosc = miejscowosc.trim();
    console.log("wysłałeś formularz");

    this.serwisWysylanie.stworz(imie, nazwisko, miejscowosc)
      .then(nowyUser => this.uzytkownicyBazy.push(nowyUser));

    this.serwisRoutera.navigateByUrl('/list');
  }

  




}
