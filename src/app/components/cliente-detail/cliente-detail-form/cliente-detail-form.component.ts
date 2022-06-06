import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteDetail } from 'src/app/shared/cliente-detail.model';
import { DateAdapter } from '@angular/material/core';

import { ClienteDetailService } from 'src/app/shared/cliente-detail.service';

@Component({
  selector: 'qsi-app-cliente-detail-form',
  templateUrl: './cliente-detail-form.component.html',
  styles: [
  ]
})
export class ClienteDetailFormComponent implements OnInit {
  @Output() public close: EventEmitter<boolean> = new EventEmitter();
  @Output() public eventInsertClient: EventEmitter<any>=new EventEmitter();

  public tituloModal: string;
  public cliente: ClienteDetail = new ClienteDetail();
  public fecha: any;

  constructor(
    public service:ClienteDetailService,
    private dateAdapter: DateAdapter<Date>) {
      this.tituloModal = "Creación Cliente";
      this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.InsertCliente(form)
  }

  InsertCliente(form: NgForm){
    let fecha = this.formatDate(this.fecha);
    this.cliente.fechaNacimiento = fecha;
    this.eventInsertClient.emit(this.cliente);
    this.ResetForm(form);
  }

  ResetForm(form: NgForm) {
    form.form.reset();
    this.cliente = new ClienteDetail();
    this.fecha = "";
  }

  closeModal($event: boolean) {
    this.close.emit($event);
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }
}
