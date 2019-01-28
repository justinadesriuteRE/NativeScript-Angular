import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { isAndroid } from "tns-core-modules/platform";

@Component({
  selector: "Heroes",
  moduleId: module.id,
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  public searchPhrase: string;

  public onSubmit(args) {
      let searchBar = <SearchBar>args.object;
      alert("You are searching for " + searchBar.text);
  }

  public onTextChanged(args) {
      let searchBar = <SearchBar>args.object;
      console.log("SearchBar text changed! New value: " + searchBar.text);
  }

  public searchBarLoaded(args) {
    let searchBar = <SearchBar>args.object;
    console.log('searchbar', searchBar);
    searchBar.dismissSoftInput();

    if (isAndroid) {
        searchBar.android.clearFocus();
    }

    searchBar.text = "";
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}