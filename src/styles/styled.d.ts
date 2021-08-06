import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: {
      main: string;
    };
    text: {
      white: string;
      grey: string;
      black: string;
      number: string;
    };
    background: {
      white: string;
      modal: string;
    };
    input: {
      default: string;
      pressed: string;
    };
    button: {
      primary: string;
      secondary: string;
    };
    heightPokemon: {
      short: string;
      medium: string;
      tall: string;
    };
    weightPokemon: {
      light: string;
      normal: string;
      heavy: string;
    };
    type: {
      bug: string;
      dark: string;
      dragon: string;
      electric: string;
      fairy: string;
      fighting: string;
      fire: string;
      flying: string;
      ghost: string;
      grass: string;
      ground: string;
      ice: string;
      normal: string;
      poison: string;
      psychic: string;
      rock: string;
      steel: string;
      water: string;
    };
    backgroundType: {
      bug: string;
      dark: string;
      dragon: string;
      electric: string;
      fairy: string;
      fighting: string;
      fire: string;
      flying: string;
      ghost: string;
      grass: string;
      ground: string;
      ice: string;
      normal: string;
      poison: string;
      psychic: string;
      rock: string;
      steel: string;
      water: string;
    };
    fonts: {
      sizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      weight: {
        regular: number;
        medium: number;
        bold: number;
      };
    };
  }
}
