import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Color } from "tns-core-modules/color";
import { Label } from "tns-core-modules/ui/label";
import * as enums from "tns-core-modules/ui/enums";

@Component({
  selector: "dashboard",
  moduleId: module.id,
  templateUrl: "./dashboard.component.html",
  styleUrls: [ "./dashboard.component.scss" ]
})
export class DashboardComponent implements OnInit {

  animate(label: Label) {
    // >> animation-animating-properties-code
    label.animate({
        opacity: 0.75,
        backgroundColor: new Color("Orange"),
        translate: { x: 200, y: 200 },
        scale: { x: 2, y: 2 },
        rotate: 180,
        duration: 3000,
        delay: 20,
        iterations: 5,
        curve: enums.AnimationCurve.easeIn
    }).then(() => {
        console.log("Animation finished.");
    }).catch((e) => {
        console.log(e.message);
    });
    // << animation-animating-properties-code
  }

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 14));
  }

}