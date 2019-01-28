import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AntiheroDetailRoutingModule } from "./antihero-detail-routing.module";
import { AntiheroDetailComponent } from "./antihero-detail.component";

@NgModule({
    imports: [
        AntiheroDetailRoutingModule,
    ],
    declarations: [
        AntiheroDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AntiheroDetailModule { }
