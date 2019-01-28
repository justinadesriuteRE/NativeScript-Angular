import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DashboardComponent } from '~/app/dashboard/dashboard.component';
import { HeroesComponent } from '~/app/heroes/heroes.component';
import { AntiheroesComponent } from '~/app/antiheroes/antiheroes.component';
import { HeroDetailComponent } from '~/app/hero-detail/hero-detail.component';
import { AntiheroDetailComponent } from '~/app/antihero-detail/antihero-detail.component';
import { MaybesComponent } from '~/app/maybes/maybes.component';
import { AnimationComponent } from '~/app/animation/animation.component';

const routes: Routes = [
    { path: "dashboard", component: DashboardComponent },
    { path: "heroes", component: HeroesComponent },
    { path: "antiheroes", component: AntiheroesComponent },
    { path: "maybes", component: MaybesComponent },
    { path: "details/:id", component: HeroDetailComponent },
    { path: "antidetails/:id", component: AntiheroDetailComponent },
    { path: "animation", component: AnimationComponent },
    { path: "**", redirectTo: "dashboard" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
