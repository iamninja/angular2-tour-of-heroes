import {Component, OnInit}    from '@angular/core';
import {Router}               from '@angular/router-deprecated';
import {Hero}                 from './hero';
import {HeroService}          from './hero.service';
import {HeroDetailComponent}  from './hero-detail.component';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: [
    'app/heroes.component.css'
  ],
  directives: [HeroDetailComponent],
  providers: [],
})
export class HeroesComponent implements OnInit {
  public title = 'Tour of Heroes';
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(
    private _heroService: HeroService,
    private _router: Router
  ) {

  }

  getHeroes() {
      this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
      this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
