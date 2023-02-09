import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Beer } from "../../model/beer";

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private httpClient: HttpClient) { }

  public fetchBeers() {
    // appel à l'API
    return this.httpClient.get<Beer[]>('https://api.punkapi.com/v2/beers', {
      params: {
        limit: 9,
        sort: 'desc'
      }
    });
  }
}
