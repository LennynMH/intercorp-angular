import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClienteDetailService } from '../../shared/cliente-detail.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styles: [
  ]
})
export class ClienteDetailComponent implements OnInit {
  public isOpenModal: boolean;

  constructor(
    public service: ClienteDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ListClienteDetail();
  }

  ListClienteDetail(){
    this.service.list = [];
    this.service.ListClienteDetail().subscribe((response) => {
      this.service.list = response;
    });
  }

  InsertClient(params:any){
    this.service.InsertClienteDetail(params).subscribe((response) => {
      try{
        this.ListClienteDetail();
        this.toastr.success("Creación exitosa");
      }
      catch(error){
        this.toastr.error("Error en la inserción");
      }
    });
    this.isOpenModal = false;
  }

  DeleteClient(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.DeleteClienteDetail(id).subscribe((response) => {
        try{
          this.ListClienteDetail();
          this.toastr.error("Eliminación exitosa");
        }
        catch(error){
          this.toastr.error("Error en la inserción");
        }
      });
    }
  }

  OpenCreateCliente(){
    this.isOpenModal = true;
  }
}
