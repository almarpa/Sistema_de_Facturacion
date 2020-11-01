import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/cliente';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string = 'http://localhost:8080/api/clientes';

  constructor(private httpClient: HttpClient) { }

  //Obtiene los clientes
  getClientes(): Observable<Cliente[]> {

    return this.httpClient.get(this.url).pipe(
      map( resp => resp as Cliente[] )
    )

  }
}
