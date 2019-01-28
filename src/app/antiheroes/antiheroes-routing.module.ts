import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AntiheroesComponent } from "./antiheroes.component";

const routes: Routes = [
    { path: "", component: AntiheroesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AntiheroesRoutingModule { }
