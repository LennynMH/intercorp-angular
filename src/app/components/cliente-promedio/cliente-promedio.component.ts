import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClienteDetailService } from 'src/app/shared/cliente-detail.service';
import { Clientekpi } from 'src/app/shared/cliente-kpi.model';

@Component({
  selector: 'app-cliente-promedio',
  templateUrl: './cliente-promedio.component.html',
  styleUrls: ['./cliente-promedio.component.css']
})
export class ClientePromedioComponent implements OnInit {
  public clienteKpi: Clientekpi = new Clientekpi();

  constructor(
    public service: ClienteDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.GetClientesKpi();
  }

  GetClientesKpi(){
    this.service.GetClientesKpi().subscribe((response) => {
      this.clienteKpi = response;
    });
  }
}
