import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 1215
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 5554545
    }
  ]

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.character.splice(index, 1);
  // }

  deleteCharacterById(id: string | undefined): void {
    this.characters = this.characters.filter(character => character.id != id);
  }

}
