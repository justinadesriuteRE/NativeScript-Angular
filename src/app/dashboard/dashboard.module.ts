import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { DashboardComponent } from "./dashboard.component";
import { BottomNavigationModule } from "../bottom-navigation/bottom-navigation.module";

@NgModule({
    imports: [
        BottomNavigationModule
    ],
    declarations: [
        DashboardComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DashboardModule { }
