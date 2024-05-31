import { CreateCountryDto } from "src/country/dto/create-country.dto";
import { Country } from "src/country/entities/country.entity";

export class CreateCityDto {
    id:number;
    name:string;
    countryId?: number;
    country?:CreateCountryDto;
}
