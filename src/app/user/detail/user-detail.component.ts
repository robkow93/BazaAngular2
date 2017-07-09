import { Component, OnInit } from '@angular/core';
import { Uzytkownik } from '../user'
import { UserService } from '../user.service' //Służy do pobierania z Tablicy osob, wiec samej tablicy juz nie potrzeba

//Do routingu
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  uzytkownik:Uzytkownik;

  constructor(private serwisPobierania:UserService, private serwisRoutowania:ActivatedRoute,private serwisLokalizacji:Location) { }


  ngOnInit() {
    this.serwisRoutowania.paramMap
      .switchMap((params: ParamMap) => this.serwisPobierania.getUser(+params.get('id')))
      .subscribe(userZbazy => this.uzytkownik = userZbazy);
  }


  Wroc(): void {
    this.serwisLokalizacji.back();
  }


}
