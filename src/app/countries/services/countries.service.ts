import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${query}`)
      .pipe(catchError(() => of([])));
  }

  searchCountry(query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${query}`)
      .pipe(catchError(() => of([])));
  }

  searchRegion(query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${query}`)
      .pipe(catchError(() => of([])));
  }
}
