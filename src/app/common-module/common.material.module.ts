import { NgModule } from '@angular/core';

import { MdListModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdButtonModule, MdCheckboxModule, MdTabsModule, MdProgressSpinnerModule } from '@angular/material';
@NgModule({
    imports: [MdListModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdButtonModule, MdCheckboxModule, MdTabsModule, MdProgressSpinnerModule],
    exports: [MdListModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdButtonModule, MdCheckboxModule, MdTabsModule, MdProgressSpinnerModule],
})
export class CommonMaterialModule { }