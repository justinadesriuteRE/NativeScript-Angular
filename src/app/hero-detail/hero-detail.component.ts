import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
import { TNSPlayer } from 'nativescript-audio-player';

@Component({
  selector: "hero-detail",
  moduleId: module.id,
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.scss"]
})
export class HeroDetailComponent implements OnInit {

  private _player: TNSPlayer;

  public togglePlay() {
    if (this._player.isAudioPlaying()) {
      this._player.pause();
    } else {
      this._player.play();
    }
  }

  private _trackComplete(args: any) {
    console.log('reference back to player:', args.player);
    console.log('whether song play completed successfully:', args.flag);
  }

  private _trackError(args: any) {
    console.log('reference back to player:', args.player);
    console.log('the error:', args.error);
    console.log('extra info on the error:', args.extra);
  }

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
      this._player = new TNSPlayer();
      this._player.debug = true;
      this._player
        .initFromFile({
          audioFile: '/Users/justina_desriute/Projects/heroes_transformed/src/app/hero-detail/song.mp3',
          loop: false,
          completeCallback: this._trackComplete.bind(this),
          errorCallback: this._trackError.bind(this)
        })
        .then(() => {
          this._player.getAudioTrackDuration().then(duration => {
            console.log(`song duration:`, duration);
          });
        });
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  playSong(): void {
    this._player.play();
  }

  pauseSong(): void {
    this._player.pause();
  }

  goBack(): void {
    this.location.back();
  }

}
