import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { User, LoginCredentials, RegisterData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private readonly USERS_KEY = 'users';
  private readonly CURRENT_USER_KEY = 'currentUser';

  constructor() {
    let storedUser: string | null = null;

    if (isPlatformBrowser(this.platformId)) {
      storedUser = localStorage.getItem(this.CURRENT_USER_KEY);
    }

    this.currentUserSubject = new BehaviorSubject<User | null>(
      storedUser ? JSON.parse(storedUser) : null
    );

    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  // Registrar nuevo usuario
  register(data: RegisterData): { success: boolean; message: string } {
    const users = this.getAllUsers();

    if (users.find(u => u.correo === data.correo)) {
      return { success: false, message: 'El correo ya está registrado' };
    }

    const newUser: User = {
      id: this.generateId(),
      nombre: data.nombre,
      correo: data.correo,
      contraseña: data.contraseña
    };

    users.push(newUser);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    }

    return { success: true, message: 'Usuario registrado exitosamente' };
  }

  // Iniciar sesión
  login(credentials: LoginCredentials): { success: boolean; message: string } {
    const users = this.getAllUsers();

    const user = users.find(
      u => u.correo === credentials.correo && u.contraseña === credentials.contraseña
    );

    if (user) {
      const userToStore = { ...user };
      delete (userToStore as any).contraseña;

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(userToStore));
      }

      this.currentUserSubject.next(userToStore);

      return { success: true, message: 'Inicio de sesión exitoso' };
    }

    return { success: false, message: 'Correo o contraseña incorrectos' };
  }

  // Cerrar sesión
  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.CURRENT_USER_KEY);
    }

    this.currentUserSubject.next(null);
  }

  // Verificar si está autenticado
  isAuthenticated(): boolean {
    return this.currentUserValue !== null;
  }

  // Obtener todos los usuarios
  private getAllUsers(): User[] {
    if (!isPlatformBrowser(this.platformId)) return [];

    const users = localStorage.getItem(this.USERS_KEY);
    return users ? JSON.parse(users) : [];
  }

  // Generar ID único
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}