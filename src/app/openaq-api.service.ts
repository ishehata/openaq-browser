import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './models/country.model';
import { City } from './models/city.model';
import { Location } from './models/location.model';
import { Measurement } from './models/measurement.model';
import { Parameter } from './models/parameter.model';
import { Source } from './models/source.model';
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

  private params(params: {}): {} {
    let p = {}
    for (let key in params) {
      if (params[key] != null && params[key] != '') {
        p[key] = params[key];
      }
    }
    return p;
  }

  listCountries(limit=100): Observable<ApiResponse<Country>> {
    return this.http.get<ApiResponse<Country>>('https://api.openaq.org/v1/countries', {
      params: {
        limit: limit.toString(),
      }
    })
  }

  listCities(params={}, limit=100): Observable<ApiResponse<City>> {
    params['limit'] = limit.toString();
    let p = this.params(params);
    return this.http.get<ApiResponse<City>>('https://api.openaq.org/v1/cities', {params: p});
  }

  listLocations(params={}, limit=100): Observable<ApiResponse<Location>> {
    params['limit'] = limit.toString();
    let p = this.params(params);
    return this.http.get<ApiResponse<Location>>('https://api.openaq.org/v1/locations', {params: p});
  }

  listMeasurements(params={},limit=100): Observable<ApiResponse<Measurement>> {
    params['limit'] = limit.toString();
    let p = this.params(params);
    return this.http.get<ApiResponse<Measurement>>('https://api.openaq.org/v1/measurements', {params: p});
  }

  listParameters(params={}, limit=100): Observable<ApiResponse<Parameter>> {
    params['limit'] = limit.toString();
    let p = this.params(params);
    return this.http.get<ApiResponse<Parameter>>('https://api.openaq.org/v1/parameters', {params: p});
  }

  listSources(params={}, limit=100): Observable<ApiResponse<Source>> {
    params['limit'] = limit.toString();
    let p = this.params(params);
    return this.http.get<ApiResponse<Source>>('https://api.openaq.org/v1/sources', {params: p});
  }
}
