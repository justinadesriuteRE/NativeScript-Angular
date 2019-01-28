import { Component, OnInit, Input } from '@angular/core';
import { Antihero } from '../antihero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AntiheroService }  from '../antihero.service';

@Component({
  selector: "antihero-detail",
  moduleId: module.id,
  templateUrl: "./antihero-detail.component.html",
  styleUrls: ["./antihero-detail.component.scss"]
})
export class AntiheroDetailComponent implements OnInit {

  @Input() antihero: Antihero;

  constructor(

    private route: ActivatedRoute,
    private antiheroService: AntiheroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAntihero();
  }

  getAntihero(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.antiheroService.getAntihero(id)
      .subscribe(antihero => this.antihero = antihero);
  }

  goBack(): void {
    this.location.back();
  }

}
