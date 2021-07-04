export namespace Data {
    export interface Continent {
        code: string;
        name: string;
    }

    export interface Language {
        code: string;
        name: string;
        native: string;
        rtl: boolean;
    }

    export interface Country {
        code: string;
        name: string;
        capital: string;
        currency: string;
        emoji: string;
        emojiU: string;
        continent: Continent;
        languages: Language[];
    }
}
