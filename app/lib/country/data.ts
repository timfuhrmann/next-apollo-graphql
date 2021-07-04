import client from "../util/apollo";
import { COUNTRIES } from "./query";
import { Data } from "../type";

interface Countries {
    countries: Data.Country[];
}

export const getCountries = async (): Promise<Data.Country[]> => {
    const { data } = await client.query<Countries>({ query: COUNTRIES });
    return data.countries;
};
