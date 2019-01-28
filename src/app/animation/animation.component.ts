import { Component, OnInit } from '@angular/core';

import { registerElement } from 'nativescript-angular';
import { LottieView } from 'nativescript-lottie';


registerElement('LottieView', () => LottieView);

@Component({
  selector: 'animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  moduleId: module.id,
})

export class AnimationComponent implements OnInit {

  public loop: boolean = true;
  public srcA: string;
  public srcB: string;
  public srcC: string;
  public srcD: string;
  public autoPlay: boolean = true;
  public animations: Array<string>;

  private _lottieView: LottieView;

  constructor() {
    this.animations = [
      'Mobilo/A.json',
      'Mobilo/D.json',
      'Mobilo/N.json',
      'Mobilo/S.json'
    ];
    this.srcA = this.animations[0];
    this.srcB = this.animations[1];
    this.srcC = this.animations[2];
    this.srcD = this.animations[3];
  }

  lottieViewLoaded(event) {
    this._lottieView = <LottieView>event.object;
  }

  ngOnInit() {
  }
}
