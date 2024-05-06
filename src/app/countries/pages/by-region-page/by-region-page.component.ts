import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  searchByRegion(query: string): void {
    this.isLoading = true;
    this.countriesService.searchRegion(query).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
