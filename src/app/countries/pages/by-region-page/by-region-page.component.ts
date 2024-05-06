import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion: Region = 'Africa';

  ngOnInit(): void {
    if (this.regions.length > 0) {
      this.searchByRegion(this.regions[0]);
    }
  }

  constructor(private countriesService: CountriesService) {}

  searchByRegion(query: Region): void {
    this.selectedRegion = query;
    this.isLoading = true;
    this.countriesService.searchRegion(query).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
