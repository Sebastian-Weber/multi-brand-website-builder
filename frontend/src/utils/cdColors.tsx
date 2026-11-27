// Colour roles for the website builder. Values come from design tokens:
// tokens/semantic/peters.json -> npm run tokens -> src/styles/tokens.css.
// Do not put hex values here; change the tokens instead.

const cdColors = {
    primaryColor: 'var(--cd-primary-color)', // dark purple
    secondaryColor: 'var(--cd-secondary-color)', // green
    tertiaryColor: 'var(--cd-tertiary-color)', // teal
    primaryAccentColor: 'var(--cd-primary-accent-color)', // 
    secondaryAccentColor: '',
  
    // green
    primaryBackgroundColorLight: 'var(--cd-primary-background-color-light)',
    primaryBackgroundColorDefault: 'var(--cd-primary-background-color-default)',
    primaryBackgroundColorDark: 'var(--cd-primary-background-color-dark)',
  
    // yellow   
    secondaryBackgroundColorLight: 'var(--cd-secondary-background-color-light)',
    secondaryBackgroundColorDefault: 'var(--cd-secondary-background-color-default)',
    secondaryBackgroundColorDark: 'var(--cd-secondary-background-color-dark)',
  
    // red
    tertiaryBackgroundColorLight: 'var(--cd-tertiary-background-color-light)',
    tertiaryBackgroundColorDefault: 'var(--cd-tertiary-background-color-default)',
    tertiaryBackgroundColorDark: 'var(--cd-tertiary-background-color-dark)',
  
    // blue
    quaternaryBackgroundColorLight: 'var(--cd-quaternary-background-color-light)',
    quaternaryBackgroundColorDefault: 'var(--cd-quaternary-background-color-default)',
    quaternaryBackgroundColorDark: 'var(--cd-quaternary-background-color-dark)',
  
    // red
    quinaryBackgroundColorLight: 'var(--cd-quinary-background-color-light)',
    quinaryBackgroundColorDefault: 'var(--cd-quinary-background-color-default)',
    quinaryBackgroundColorDark: 'var(--cd-quinary-background-color-dark)',
  
    // white
    whiteBackground: 'var(--cd-white-background)',
  
    // black
    blackBackground: 'var(--cd-black-background)',
  
    primaryFontColor: 'var(--cd-primary-font-color)',
    secondaryFontColor: 'var(--cd-secondary-font-color)',
    tertiaryFontColor: 'var(--cd-tertiary-font-color)'
  };

// The five former local copies of cdColors (Section_Divider, Section_List_and_Image,
// Expander_sm, About, Elektro-Dienstleistungen-Privatkunden) were identical.
// They now share this definition. Same role names as cdColors, different values.
export const cdColorsLegacy = {
  primaryColor: 'var(--legacy-primary-color)',
  secondaryColor: 'var(--legacy-secondary-color)',
  primaryAccentColor: '',
  secondaryAccentColor: '',

  // green
  primaryBackgroundColorLight: 'var(--legacy-primary-background-color-light)',
  primaryBackgroundColorDefault: 'var(--legacy-primary-background-color-default)',
  primaryBackgroundColorDark: 'var(--legacy-primary-background-color-dark)',

  // yellow   
  secondaryBackgroundColorLight: 'var(--legacy-secondary-background-color-light)',
  secondaryBackgroundColorDefault: 'var(--legacy-secondary-background-color-default)',
  secondaryBackgroundColorDark: 'var(--legacy-secondary-background-color-dark)',

  // teal
  tertiaryBackgroundColorLight: 'var(--legacy-tertiary-background-color-light)',
  tertiaryBackgroundColorDefault: 'var(--legacy-tertiary-background-color-default)',
  tertiaryBackgroundColorDark: 'var(--legacy-tertiary-background-color-dark)',

  // blue
  quaternaryBackgroundColorLight: 'var(--legacy-quaternary-background-color-light)',
  quaternaryBackgroundColorDefault: 'var(--legacy-quaternary-background-color-default)',
  quaternaryBackgroundColorDark: 'var(--legacy-quaternary-background-color-dark)',

  // brown
  quinaryBackgroundColorLight: 'var(--legacy-quinary-background-color-light)',
  quinaryBackgroundColorDefault: 'var(--legacy-quinary-background-color-default)',
  quinaryBackgroundColorDark: 'var(--legacy-quinary-background-color-dark)',

  // white
  whiteBackground: 'var(--legacy-white-background)',

  // black
  blackBackground: 'var(--legacy-black-background)',

  primaryFontColor: 'var(--legacy-primary-font-color)',
  secondaryFontColor: 'var(--legacy-secondary-font-color)',
  tertiaryFontColor: ''
};

export default cdColors;
