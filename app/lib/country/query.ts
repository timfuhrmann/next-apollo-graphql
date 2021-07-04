import { gql } from "@apollo/client";

export const COUNTRIES = gql`
    query GetCountries {
        countries {
            name
            capital
            currency
            code
            emoji
            emojiU
            languages {
                code
                name
                native
            }
            continent {
                name
                code
            }
        }
    }
`;
