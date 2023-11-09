import ptJson from './pt-br.json';
import enJson from './en-us.json';

const LanguagePT = ptJson;
const LanguageEN = enJson;

export function getLanguage(language: string) {
  const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

  if (languageWithoutRegionCode === 'pt') {
    return LanguagePT;
  } else {
    return LanguageEN;
  }
}
