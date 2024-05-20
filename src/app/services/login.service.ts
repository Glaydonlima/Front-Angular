import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }


  login(email: string, senha: string){
    return this.httpClient.post<LoginResponse>("/login", {email, senha}).pipe(tap((value)=> {
      sessionStorage.setItem("auth-token", value.token)
      sessionStorage.setItem("usuario", value.nome)
    })
  )
  } 
}
