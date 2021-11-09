import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private httpCliente : HttpClient) { }

  obterEndereco(cep : string){
    return this.httpCliente.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
