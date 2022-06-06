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
    return this.http.get(this.baseURL+"/ListClientes").pipe(
      map((response: any) => {
        return response['data'];
      })
    );
  }

  GetClientesKpi() {
    return this.http.get(this.baseURL+"/KpiDeClientes").pipe(
      map((response: any) => {
        return response['data'];
      })
    );
  }

  InsertClienteDetail(params: any) {
    return this.http.post(this.baseURL+"/CreaCliente", params).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  DeleteClienteDetail(id: string) {
    return this.http.delete(this.baseURL+"/"+id).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
