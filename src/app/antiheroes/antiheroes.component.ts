
import { Component, OnInit } from '@angular/core';
import { Antihero } from '../antihero';
import { AntiheroService } from '../antihero.service';
import { SearchBar } from "tns-core-modules/ui/search-bar";

@Component({
  selector: "antiheroes",
  moduleId: module.id,
  templateUrl: "./antiheroes.component.html",
  styleUrls: ["./antiheroes.component.scss"]
})

export class AntiheroesComponent implements OnInit {

  antiheroes: Antihero[];

  public searchPhrase: string;

  public onSubmit(args) {
      let searchBar = <SearchBar>args.object;
      alert("You are searching for " + searchBar.text);
  }

  public onTextChanged(args) {
      let searchBar = <SearchBar>args.object;
      console.log("SearchBar text changed! New value: " + searchBar.text);
  }

  constructor(private antiheroService: AntiheroService) { }

  ngOnInit() {
    this.getAntiheroes();
  }

  getAntiheroes(): void {
    this.antiheroService.getAntiheroes()
      .subscribe(antiheroes => this.antiheroes = antiheroes);
  }

}