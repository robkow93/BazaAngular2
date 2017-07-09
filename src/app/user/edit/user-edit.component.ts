import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Uzytkownik } from '../user'


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  
  constructor(private fb: FormBuilder) { }

  @Input() user: Uzytkownik;
  userForm: FormGroup;

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required ],
      power: '',
      sidekick: ''
    });
  }

  ngOnChanges() {
    this.userForm.reset({
      imie: this.user.imie
    });
  }


  ngOnInit() {
  }

}
