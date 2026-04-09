import { Component } from '@angular/core';
import {Game} from '../game/game'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Game],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User  {
  userName= 'Daniel'

  isLoggedIn = false
  
  fav = ''
  getFavorite(gameName:string){
    this.fav = gameName
  }

  greet() {
    alert('Hola')
  }
}
