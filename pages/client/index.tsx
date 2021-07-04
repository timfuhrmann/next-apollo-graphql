import React from "react";
import { Wrapper, Inner, CountryWrapper } from "../../app/css/page";
import { Country } from "../../app/components/Country";
import { useQuery } from "@apollo/client";
import { COUNTRIES } from "../../app/lib/country/query";
import { Data } from "../../app/lib/type";

interface Countries {
    countries: Data.Country[];
}

const Client: React.FC = () => {
    const { data, loading, error } = useQuery<Countries>(COUNTRIES);

    if (loading)
        return (
            <Wrapper>
                <h2>Loading...</h2>
            </Wrapper>
        );

    if (error || !data) return null;

    return (
        <Wrapper>
            <Inner>
                {data.countries.map(country => (
                    <CountryWrapper key={country.code}>
                        <Country {...country} />
                    </CountryWrapper>
                ))}
            </Inner>
        </Wrapper>
    );
};

export default Client;
