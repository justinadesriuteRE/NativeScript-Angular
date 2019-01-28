import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { BottomNavigationComponent } from "./bottom-navigation.component";

@NgModule({
    imports: [
    ],
    declarations: [
        BottomNavigationComponent
    ],
    exports: [
		BottomNavigationComponent
	],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BottomNavigationModule { }
