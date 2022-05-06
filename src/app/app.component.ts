import { Component, ViewEncapsulation } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './heroes/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroesData:any; 

  constructor(private apiService: HeroService){

  }

ngOnInit() {
  this.apiService.read().subscribe((heroes: Hero[])=>{
    this.heroesData = heroes; 
  })
  }

  delete(heroes_id: number){
    this.apiService.delete(heroes_id)
    .subscribe(heroes => {
      console.log("Hero deleted"); 
    }); 
  }
}

