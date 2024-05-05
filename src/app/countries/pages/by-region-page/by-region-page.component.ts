import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(query: string): void {
    this.countriesService.searchRegion(query).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
