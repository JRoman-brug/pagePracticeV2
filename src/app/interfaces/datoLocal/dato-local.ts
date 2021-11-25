export interface IDatoLocalId extends IDatoLocal{
    id:string
} 
export interface IDatoLocal {
    informacion?:string;
    activo?:boolean;
    titulo?:string;
    redSocial?:boolean;
}
