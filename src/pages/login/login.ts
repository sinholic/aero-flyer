import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
<<<<<<< HEAD
import {Http} from 'angular2/http';
=======
>>>>>>> d0e5e081d4c394194edcc1058350101acac6f7c9

import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, http: Http) {
    this.data = {};
    this.data.username = '';
    this.data.response = '';
    this.http = http;
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
