import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {

  country: Country | undefined
  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //recogemos la ruta y obtenemos le codigo de pais para hacer la peticion a la api
    this.activatedRoute.params.subscribe(async params => {
      let code = params['code'];
      let response = await this.countriesService.getByCode(code);
      this.country = response[0];
      console.log(this.country)
    })

  }

}
