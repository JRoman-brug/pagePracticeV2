export interface IProductoId extends IProducto{
    id:string;
}   

export interface IProducto {
    nombre:string;
    precio:number;
    descripcion:string;
    categoria:string;
}
