import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://restcountries.com/v3.1/'
  }

  getAll(pRegion = 'europe'): Promise<Country[]> {
    return lastValueFrom(this.httpClient.get<Country[]>(this.baseUrl + 'region/' + pRegion))
  }

  getByCode(pCode: string): Promise<Country[]> {
    return lastValueFrom(this.httpClient.get<Country[]>(this.baseUrl + 'alpha/' + pCode));
  }
}
