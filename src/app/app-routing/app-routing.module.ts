import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from '../about/about.component';
import {SideNavComponent} from '../side-nav/side-nav.component';

const routes: Routes = [

	// {
	// 	path: "app",
	// 	component: SideNavComponent
	// },
	{
		path: "",
		redirectTo: "app",
		pathMatch: "full"
	},
	{
		path: "*",
		redirectTo: "app",
		pathMatch: "full"
	}
]
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes, {
			useHash: true
		})
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {

}