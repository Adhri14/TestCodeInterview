import I18n, {getLanguages} from 'react-native-i18n';

import en from './en';
import id from './id';
I18n.fallbacks = true;

I18n.translations = {
  en: en,
  id: id,
};

getLanguages()
  .then(languages => {
    // I18nManager.forceRTL(true);
    console.log('getLanguages', languages); // ['en-US', 'en']
  })
  .catch(error => {
    console.log('getLanguages error : ', error);
  });
export default I18n;
