import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './models/country.model';
import { City } from './models/city.model';
import { Location } from './models/location.model';
import { Observable } from 'rxjs';

export interface ApiResponse<T> {
  meta: {
    name: string,
    license: string,
    website: string,
    page: number,
    limit: number,
    found: number,
  },
  results: T[]
}

@Injectable({
  providedIn: 'root'
})
export class OpenaqApiService {

  constructor(private http: HttpClient) { }

  listCountries(limit=100): Observable<ApiResponse<Country>> {
    return this.http.get<ApiResponse<Country>>('https://api.openaq.org/v1/countries', {
      params: {
        limit: limit.toString(),
      }
    })
  }

  listCities(params={}, limit=100): Observable<ApiResponse<City>> {
    params['limit'] = limit.toString();
    return this.http.get<ApiResponse<City>>('https://api.openaq.org/v1/cities', {params})
  }

  listLocations(params={}, limit=100): Observable<ApiResponse<Location>> {
    params['limit'] = limit.toString();
    let p = {};
    for (let key in params) {
      if (params[key] != null) {
        p[key] = params[key];
      }
    }
    return this.http.get<ApiResponse<Location>>('https://api.openaq.org/v1/locations', {params: p})
  }

  listMeasurements(limit=100): Observable<ApiResponse<Country>> {
    return this.http.get<ApiResponse<Country>>('https://api.openaq.org/v1/measurements', {
      params: {
        limit: limit.toString(),
      }
    })
  }
}
