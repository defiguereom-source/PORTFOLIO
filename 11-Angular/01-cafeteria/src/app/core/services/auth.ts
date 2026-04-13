import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router'

export interface User {
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root',
})

export class Auth {
  private isAuthenticatedSignal  = signal<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSignal.asReadonly();

  constructor(private router: Router){
    //verifica si hay sesion guardada

    const token = localStorage.getItem('auth_token');
    if(token){
      this.isAuthenticatedSignal.set(true);
    }
  }

  login(email: string, password: string): boolean{

    // Credenciales de ejemplo
    if(email === 'daniel182740@gmail.com' && password === '123456'){
      const token = 'fake-asdasd-token-' + Date.now();
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_email', email);
      this.isAuthenticatedSignal.set(true);
      return true
    }
    return false;
  }

  logout(): void{
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_email');
    this.isAuthenticatedSignal.set(false);
    this.router.navigate(['/login'])
  }

  getCurrentUser(): string | null{
    return localStorage.getItem('user_email')
  }
}
