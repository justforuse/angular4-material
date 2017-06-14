import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'app';

	menus;

	constructor() {
	}

	ngOnInit() {
		this.menus = [
			{
				name: "首页"
			},
			{
				name: "联系我"
			},
			{
				name: "关于"
			}
		]
	}
}
