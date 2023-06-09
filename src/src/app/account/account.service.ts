import { Injectable } from '@angular/core';
import {JwtTokenService} from "../core/services/jwt-token.service";
import {environment} from "../../environments/environment";
import {IJwtTokenPair} from "../core/models/jwt-token-pair";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IRegisterCredentials} from "../core/models/register-credentials";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl: string = environment.accountServiceUrl;

  constructor(private jwtTokenService: JwtTokenService, private client: HttpClient) {

  }

  public login(user: IRegisterCredentials): Observable<IJwtTokenPair> {
    return this.client.post<IJwtTokenPair>(`${this.baseUrl}login`, user);
  }

  public register(user: IRegisterCredentials): Observable<IJwtTokenPair> {
    return this.client.post<IJwtTokenPair>(`${this.baseUrl}register`, user);
  }
}
