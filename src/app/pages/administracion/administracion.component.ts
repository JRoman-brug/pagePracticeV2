import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {

  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Editar inicio',
        icon: 'pi pi-fw pi-home',
        routerLink:"Admin-Inicio"
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-calendar',
        routerLink:"Admin-Productos"
      },
      {
        label: 'Carousel de productos',
        icon: 'pi pi-fw pi-pencil',
        routerLink:"Admin-Carouse-Productos"

      },
      {
        label: 'Preguntas frecuentes ',
        icon: 'pi pi-fw pi-file',
        routerLink:"Admin-Preguntas-Frecuentes" 
      },
    ];
  }

  ngOnInit(): void {
  }

}
