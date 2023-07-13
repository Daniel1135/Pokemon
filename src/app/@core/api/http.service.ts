import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly baseUrl = environment.apiUrl
  constructor(private readonly http: HttpClient) {}

  get(endpoint: string, options?: any): Observable<any> {
    return this.http.get(`${this.baseUrl}${endpoint}`, options);
  }

  post(endpoint: string, payload: any, options?: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${endpoint}`, payload, options);
  }

  put(endpoint: string, payload: any, options?: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${endpoint}`, payload, options);
  }

  patch(endpoint: string, payload: any, options?: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}${endpoint}`, payload, options);
  }

  delete(endpoint: string, options?: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}${endpoint}`, options);
  }
}
