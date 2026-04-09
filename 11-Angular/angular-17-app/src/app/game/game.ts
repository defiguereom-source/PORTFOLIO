import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  games =[{ id: 1, name: 'Undertale' }, { id: 2, name:'Minecraft' }, { id: 3, name:'Horizon Zero ' }];
  
  @Input() username = '';

  @Output() addFavoriteEvent = new EventEmitter<string>()

  fav(gameName:string){
    this.addFavoriteEvent.emit(gameName)
  }

}