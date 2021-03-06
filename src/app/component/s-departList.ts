import { Component, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as IScroll from 'iscroll';

import { common } from '../my-service';

@Component({
  selector: 's-departList',
  templateUrl: '../template/s-departList.html',
  styleUrls: ['../style/s-departList.css'],
})
export class s_departList implements AfterViewInit {
    @Input() parentBox: String;
    scroll: IScroll;
    scroll_2: IScroll;
    scroll_option = {click: true, preventDefault: true} as IScroll.IScrollOptions;
    constructor(private router: Router, private common: common) {

    }
    scrollRefresh() {
        setTimeout(() => {
            if (this.scroll) {
                this.scroll.refresh();
            }
            if (this.scroll_2) {
                this.scroll_2.refresh();
            }
        }, 130);
    }
    ngAfterViewInit() {
        this.scroll = new IScroll('s-departList .wrapper-1', this.scroll_option);
        this.scroll_2 = new IScroll('s-departList .wrapper-2', this.scroll_option);
        this.scrollRefresh();
    }
    toDocList() {
        if (this.parentBox === 'p-deptList') {
            this.common.pageNext();
            this.router.navigateByUrl('ng-app/p-docList');
        }
    }
}
