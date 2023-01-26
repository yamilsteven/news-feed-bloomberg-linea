import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private _http:HttpClient) { }

  getData() {
    return this._http.get('https://www.bloomberglinea.com/arc/outboundfeeds/rss-labsnews-es/tags_slug/bloomberg-linea-colombia/', {responseType: 'text'});
  }
}
