import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonMaterialModule} from './common-module/common.material.module'
import {AppComponent} from './app.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';


//all child module
import {AboutModule} from './about/about.module'


@NgModule({
	declarations: [
		AppComponent,
		SideNavComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonMaterialModule,
		AboutModule,

		//root app routing
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
