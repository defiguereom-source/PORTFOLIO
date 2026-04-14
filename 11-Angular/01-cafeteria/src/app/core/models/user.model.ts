export interface User {
  id: string;
  nombre: string;
  correo: string;
  contraseña: string;
}

export interface LoginCredentials {
  correo: string;
  contraseña: string;
}

export interface RegisterData {
  nombre: string;
  correo: string;
  contraseña: string;
}