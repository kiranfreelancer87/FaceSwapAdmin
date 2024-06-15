// Angular Import
import { Component } from '@angular/core';

// bootstrap
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent {
  visibleUserList = false
  username: string = ''

  constructor() {
    
  }
}
