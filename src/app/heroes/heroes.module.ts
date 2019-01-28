import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { HeroesComponent } from "./heroes.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        HeroesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HeroesModule { }
