import { Component, OnInit } from '@angular/core';

// Menu settings
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = "";
 
  constructor() {
  }

  ngOnInit(): void {
  }

  cambiarBoton() {
    if (this.menu == "active") {
      this.menu = ""
      console.log(this.menu)
    }
    else {
      this.menu = "active"
      console.log(this.menu)
    }
  }

}
