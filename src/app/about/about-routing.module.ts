import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './about.component';

const routes: Routes = [
	{
		path: 'app',
		children: [
			{
				path: "about",
				component: AboutComponent
			},
			{
				path: "",
				redirectTo: "about",
				pathMatch: "full"
			},
			{
				path: "*",
				redirectTo: "about",
				pathMatch: "full"
			}
		]

	}
]

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class AboutRoutingModule {

}