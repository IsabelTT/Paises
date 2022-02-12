import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrCountry: Country[] = new Array();
  lat: number = 40;
  lng: number = -3;

  constructor(private countriesService: CountriesService) { }

  async ngOnInit(): Promise<void> {
    this.arrCountry = await this.countriesService.getAll();
    console.log(this.arrCountry);

  }

}
