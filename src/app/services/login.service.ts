import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:8080/usuario"

  constructor(private httpClient: HttpClient) { }


  login(email: string, senha: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", {email, senha}).pipe(tap((value)=> {
      sessionStorage.setItem("auth-token", value.token)
      sessionStorage.setItem("usuario", value.nome)
    })
  )
  }
  
  signup(nome: string, email: string, senha: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl, {nome, email, senha}).pipe(tap((value)=> {
      sessionStorage.setItem("auth-token", value.token)
      sessionStorage.setItem("usuario", value.nome)
    })
  )
  } 



}
