import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/interfaces/fileUpload/file-upload';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  selectedFiles?: FileList;

  constructor(private $storage:StorageService) { }

  ngOnInit(): void {
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  subir(){
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      this.$storage.pushImageStorage(file).subscribe(a=>{
        console.log(a)
      })
    }

  }
}
