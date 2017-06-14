import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CommonMaterialModule} from '../common-module/common.material.module';
import {AboutRoutingModule} from './about-routing.module';

import {AboutComponent} from './about.component';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		AboutRoutingModule,
		CommonMaterialModule
	],
	declarations: [
		AboutComponent
	]
})
export class AboutModule {

}