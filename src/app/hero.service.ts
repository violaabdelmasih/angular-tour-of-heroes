import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock.heroes';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class HeroService {
  PHP_API_SERVER = "http://localhost:8888"; 

  constructor(private httpClient: HttpClient) { }

  read(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.PHP_API_SERVER}/heroes-api/read.php`); 
  }

  delete(heroes_id: number){
    return this.httpClient.delete<Hero>(`${this.PHP_API_SERVER}/heroes-api/delete.php?heroes_id=${heroes_id}`); 
  }

  create(Hero:Hero): Observable<Hero>{
    return this.httpClient.post<Hero>(`${this.PHP_API_SERVER}/heroes-api/create.php`, Hero); 
  }

  update(Hero: Hero){
    return this.httpClient.put<Hero>(`${this.PHP_API_SERVER}/heroes-api/update.php`, Hero); 
  }
}


/*constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}  */ 