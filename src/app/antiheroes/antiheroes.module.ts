import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AntiheroesRoutingModule } from "./antiheroes-routing.module";
import { AntiheroesComponent } from "./antiheroes.component";

@NgModule({
    imports: [
        AntiheroesRoutingModule,
    ],
    declarations: [
        AntiheroesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AntiheroesModule { }
