import { DefaultTheme } from 'styled-components';
import { colors, typograph } from 'styles/tokens';

export const theme: DefaultTheme = {
  primary: {
    main: colors.red[400],
  },
  text: {
    white: colors.white,
    grey: colors.grayScale[400],
    black: colors.grayScale[800],
    number: colors.grayScale[700],
  },
  background: {
    white: colors.white,
    modal: colors.grayScale[600],
  },
  input: {
    default: colors.grayScale[150],
    pressed: colors.grayScale[200],
  },
  button: {
    primary: colors.red[400],
    secondary: colors.grayScale[150],
  },
  heightPokemon: {
    short: colors.pink[300],
    medium: colors.blue[550],
    tall: colors.grayScale[300],
  },
  weightPokemon: {
    light: colors.green[400],
    normal: colors.blue[350],
    heavy: colors.blue[250],
  },
  type: {
    bug: colors.green[650],
    dark: colors.grayScale[500],
    dragon: colors.blue[500],
    electric: colors.yellow[300],
    fairy: colors.pink[500],
    fighting: colors.red[600],
    fire: colors.yellow[700],
    flying: colors.blue[650],
    ghost: colors.blue[750],
    grass: colors.green[600],
    ground: colors.brown[400],
    ice: colors.blue[150],
    normal: colors.grayScale[350],
    poison: colors.purple[500],
    psychic: colors.red[400],
    rock: colors.brown[400],
    steel: colors.blue[300],
    water: colors.blue[450],
  },
  backgroundType: {
    bug: colors.green[300],
    dark: colors.grayScale[450],
    dragon: colors.blue[700],
    electric: colors.yellow[400],
    fairy: colors.pink[400],
    fighting: colors.red[500],
    fire: colors.yellow[500],
    flying: colors.blue[600],
    ghost: colors.purple[600],
    grass: colors.green[500],
    ground: colors.yellow[600],
    ice: colors.blue[100],
    normal: colors.grayScale[250],
    poison: colors.purple[400],
    psychic: colors.red[300],
    rock: colors.brown[300],
    steel: colors.blue[200],
    water: colors.blue[400],
  },
  fonts: {
    ...typograph,
  },
};
