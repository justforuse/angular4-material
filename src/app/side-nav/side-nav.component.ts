import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    menus;
    constructor() { }

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
