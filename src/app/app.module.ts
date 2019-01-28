import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AntiheroesComponent } from './antiheroes/antiheroes.component';
import { AntiheroDetailComponent } from './antihero-detail/antihero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaybesComponent } from './maybes/maybes.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        AntiheroesComponent,
        AntiheroDetailComponent,
        DashboardComponent,
        MaybesComponent,
        BottomNavigationComponent,
        AnimationComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
