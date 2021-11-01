import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Interfaces
import { IProducto, IProductoId } from 'src/app/interfaces/producto/producto';

// Services
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  producto:IProducto;
  id:string;
  constructor(
    private $productServ:ProductoService,
    private routeAct:ActivatedRoute,
    private route:Router
    ) { }

  ngOnInit(): void {
    // obtengo por parametro el id que se necesite
    this.routeAct.params.subscribe(resp=>{
      this.id = resp.id;
    })
    if(this.id.length !== 20){
      this.route.navigate(['**'])
    }

    this.$productServ.getProducto(this.id).subscribe(resp=>{
      // this.producto = resp;
    })
  }

}
