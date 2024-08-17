import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();  //este es un getter
  }

  getHeroDescription(): string {    // este es un  metodo
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'spiderman';    //como el setter
  }

  changeAge(): void {  // como el setter
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }



}
