import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  isLogin = true;
  
  toggleForm(){
    this.isLogin = !this.isLogin;
  }

  onSubmit(){

  }

}
