import { CreateCityDto } from "src/city/dto/create-city.dto";
import { CreateCountryDto } from "src/country/dto/create-country.dto";

export class CreateRecyclecenterDto {
    id: number;
    name:string;
    hours:string;
    address:string;
    cityId:number;
    countryId:number;
     city?:CreateCityDto;
    country?:CreateCountryDto;
}
