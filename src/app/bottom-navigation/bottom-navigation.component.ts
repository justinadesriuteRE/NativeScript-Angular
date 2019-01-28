import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AnimationCurve } from "ui/enums";
import { screen } from "platform";

@Component({
  selector: "bottom-navigation",
  moduleId: module.id,
  templateUrl: "./bottom-navigation.component.html",
  styleUrls: ["./bottom-navigation.component.scss"]
})

export class BottomNavigationComponent implements OnInit {

  // @ViewChild('tabHighlight') tabHighlight: ElementRef;
	selectedTab: number = 0;

  @Output() tabSelected = new EventEmitter<number>();

	selectTab(index: number) {
		console.log('this.selectedTab', this.selectedTab);

		if (index != this.selectedTab) {
			console.log('this.selectedTab', this.selectedTab);

			this.selectedTab = index;
			// this.tabHighlight.nativeElement.animate({
			// 	translate: { x: index * screen.mainScreen.widthDIPs / 4, y: 0 },
			// 	curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
			// 	duration: 200
			// })
			this.tabSelected.emit(this.selectedTab);
		}
  }

  constructor() { }

  ngOnInit() {
  }
}