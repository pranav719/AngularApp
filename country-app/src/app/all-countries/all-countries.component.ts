import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit {

  constructor(private countryService: CountryService) { }
  countries: Country[] = [];

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void{
    this.countries = this.countryService.getCountries();
  }

}
