import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isSideNavOpen: boolean = false;

  onClick() {
    if(this.isSideNavOpen===true){
      this.isSideNavOpen=false;
    }else{
      this.isSideNavOpen=true;
    }
  }

}
