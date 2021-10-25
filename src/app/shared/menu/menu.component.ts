import { Component, OnInit } from '@angular/core';

// Menu settings
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // variables para personalizar
  backgrond:string;
  constructor() {
    this.backgrond="bg-primary"
  }

  ngOnInit(): void {

  }

}
