import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteDetail } from './cliente-detail.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteDetailService {
  readonly baseURL = environment.api;

  public list: ClienteDetail[] = [];

  constructor(private http: HttpClient) { }

  ListClienteDetail() {
    return this.http.get(this.baseURL+"/api/Cliente/ListClientes").pipe(
      map((response: any) => {
        return response['data'];
      })
    );
  }

  GetClientesKpi() {
    return this.http.get(this.baseURL+"/api/Cliente/KpiDeClientes").pipe(
      map((response: any) => {
        return response['data'];
      })
    );
  }

  InsertClienteDetail(params: any) {
    return this.http.post(this.baseURL+"/api/Cliente/CreaCliente", params).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  DeleteClienteDetail(id: string) {
    return this.http.delete(this.baseURL+"/api/Cliente/"+id).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
