import React from "react";
import { GetStaticProps } from "next";
import { getCountries } from "../app/lib/country/data";
import { Data } from "../app/lib/type";
import { Country } from "../app/components/Country";
import { Wrapper, Inner, CountryWrapper } from "../app/css/page";

interface HomeProps {
    countries: Data.Country[];
}

const Home: React.FC<HomeProps> = ({ countries }) => {
    return (
        <Wrapper>
            <Inner>
                {countries.map(country => (
                    <CountryWrapper key={country.code}>
                        <Country {...country} />
                    </CountryWrapper>
                ))}
            </Inner>
        </Wrapper>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const countries = await getCountries();

    return {
        props: {
            countries,
        },
    };
};

export default Home;
