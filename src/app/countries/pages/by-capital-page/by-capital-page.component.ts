import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {



  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }
  //
  searchByCapital(query: string): void {
    this.countriesService.searchCapital(query).subscribe((countries) => {
      this.countries = countries;
    });
  }






}
