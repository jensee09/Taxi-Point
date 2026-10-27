export interface MultilingualRouteItem {
  destination: string;
  distance: string;
  duration: string;
  sedanRate: string;
  ertigaRate: string;
}

export interface MultilingualFaq {
  question: string;
  answer: string;
}

export interface MultilingualSeoEntry {
  slug: string; // decoded path, e.g. "રાજકોટ ટેક્સી સર્વિસ"
  encodedPath: string;
  language: 'gu' | 'hi' | 'en';
  langBadge: string;
  keywordName: string;
  pageTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  badge: string;
  whatsappMessage: string;
  callToAction: string;
  highlights: string[];
  popularRoutes: MultilingualRouteItem[];
  faqs: MultilingualFaq[];
  relatedSlugs: { label: string; slug: string; lang: 'gu' | 'hi' | 'en' }[];
  searchKeywords: string[];
}

export const MULTILINGUAL_SEO_PAGES: Record<string, MultilingualSeoEntry> = {
  // 1. Gujarati: રાજકોટ ટેક્સી સર્વિસ
  'રાજકોટ ટેક્સી સર્વિસ': {
    slug: 'રાજકોટ ટેક્સી સર્વિસ',
    encodedPath: '/%E0%AA%B0%E0%AA%BE%E0%AA%9C%E0%AA%95%E0%AB%8B%E0%AA%9F%20%E0%AA%9F%E0%AB%87%E0%AA%95%E0%AB%8D%E0%AA%B8%E0%AB%80%20%E0%AA%B8%E0%AA%B0%E0%AB%8D%E0%AA%B5%E0%AA%BF%E0%AA%B8',
    language: 'gu',
    langBadge: 'ગુજરાતી (Gujarati)',
    keywordName: 'રાજકોટ ટેક્સી સર્વિસ',
    pageTitle: 'રાજકોટ ટેક્સી સર્વિસ | Rajkot Taxi Point – સસ્તી અને સુરક્ષિત કેબ',
    metaDescription: 'રાજકોટ ટેક્સી સર્વિસ - હિરાસર એરપોર્ટ, સોમનાથ, દ્વારકા અને અમદાવાદ માટે સસ્તી, એસી અને ચોખ્ખી ટેક્સી બુક કરો. તાત્કાલિક વ્હોટ્સએપ બુકિંગ.',
    headline: 'રાજકોટ ટેક્સી સર્વિસ - સૌથી વિશ્વાસપાત્ર કેબ સેવા',
    subheadline: 'રાજકોટ શહેર, હિરાસર ઇન્ટરનેશનલ એરપોર્ટ અને ગુજરાતભરમાં આઉટસ્ટેશન પ્રવાસ માટે સ્વચ્છ એસી ટેક્સી, અનુભવી ડ્રાઇવરો અને વ્યાજબી દર.',
    badge: 'રાજકોટની નંબર ૧ ટેક્સી સેવા',
    whatsappMessage: 'નમસ્તે રાજકોટ ટેક્સી પોઈન્ટ, મારે રાજકોટ ટેક્સી સર્વિસ વિશે પૂછપરછ કરવી છે અને કેબ બુક કરવી છે.',
    callToAction: 'હમણાં જ ટેક્સી બુક કરો',
    highlights: [
      'કોઈ એડવાન્સ પેમેન્ટની જરૂર નથી (રોકડ / UPI સ્વીકાર્ય)',
      '૨૪ કલાક હિરાસર ગ્રીનફિલ્ડ એરપોર્ટ પીકઅપ અને ડ્રોપ',
      'ચોખ્ખી, સેનિટાઇઝ્ડ અને ચિલ્ડ એસી ગાડીઓ (Dzire, Ertiga, Innova)',
      'સૌરાષ્ટ્રના તમામ ધાર્મિક સ્થળો: સોમનાથ, દ્વારકા, સાસણ ગીર ટૂર'
    ],
    popularRoutes: [
      { destination: 'રાજકોટ થી હિરાસર એરપોર્ટ', distance: '30 કિમી', duration: '35 મિનિટ', sedanRate: '₹999 ફિક્સ', ertigaRate: '₹1499 ફિક્સ' },
      { destination: 'રાજકોટ થી અમદાવાદ', distance: '215 કિમી', duration: '3.5 કલાક', sedanRate: '₹2,699 થી શરૂ', ertigaRate: '₹3,999 થી શરૂ' },
      { destination: 'રાજકોટ થી સોમનાથ', distance: '198 કિમી', duration: '4 કલાક', sedanRate: '₹2,599 થી શરૂ', ertigaRate: '₹3,799 થી શરૂ' },
      { destination: 'રાજકોટ થી દ્વારકા', distance: '225 કિમી', duration: '4.5 કલાક', sedanRate: '₹2,899 થી શરૂ', ertigaRate: '₹4,199 થી શરૂ' },
      { destination: 'રાજકોટ લોકલ સિટી (૮ કલાક / ૮૦ કિમી)', distance: '80 કિમી', duration: '8 કલાક', sedanRate: '₹1,500', ertigaRate: '₹2,200' }
    ],
    faqs: [
      {
        question: 'રાજકોટમાં ટેક્સી બુક કરવા માટે શું કરવું?',
        answer: 'તમે અમારા ડેમો વ્હોટ્સએપ નંબર પર સીધો મેસેજ કરી શકો છો અથવા કોલ કરી શકો છો. કોઈ એડવાન્સ રકમ ભરવાની જરૂર નથી.'
      },
      {
        question: 'શું હિરાસર એરપોર્ટ માટે ૨૪ કલાક કેબ મળે છે?',
        answer: 'હા, અમારી ટેક્સી સર્વિસ હિરાસર ઇન્ટરનેશનલ એરપોર્ટ માટે ૨૪ કલાક ઉપલબ્ધ છે. ફ્લાઇટ સમય અનુસાર સમયસર પીકઅપ મળશે.'
      },
      {
        question: 'કઈ કઈ ગાડીઓ ઉપલબ્ધ છે?',
        answer: 'અમારી પાસે Maruti Dzire, Hyundai Aura (Sedan 4 સીટર), Maruti Ertiga (6 સીટર), અને Toyota Innova Crysta ઉપલબ્ધ છે.'
      }
    ],
    relatedSlugs: [
      { label: 'રાજકોટ કેબ બુકિંગ', slug: 'રાજકોટ કેબ બુકિંગ', lang: 'gu' },
      { label: 'રાજકોટ એરપોર્ટ ટેક્સી', slug: 'રાજકોટ એરપોર્ટ ટેક્સી', lang: 'gu' },
      { label: 'રાજકોટ થી અમદાવાદ ટેક્સી', slug: 'રાજકોટ થી અમદાવાદ ટેક્સી', lang: 'gu' },
      { label: 'राजकोट टैक्सी सेवा', slug: 'राजकोट टैक्सी सेवा', lang: 'hi' },
      { label: 'Rajkot Taxi Booking', slug: 'rajkot-taxi', lang: 'en' }
    ],
    searchKeywords: ['રાજકોટ ટેક્સી સર્વિસ', 'rajkot taxi service', 'rajkot taxi', 'rajkot cab', 'rajkot taxi point', 'રાજકોટ કેબ']
  },

  // 2. Gujarati: રાજકોટ કેબ બુકિંગ
  'રાજકોટ કેબ બુકિંગ': {
    slug: 'રાજકોટ કેબ બુકિંગ',
    encodedPath: '/%E0%AA%B0%E0%AA%BE%E0%AA%9C%E0%AA%95%E0%AB%8B%E0%AA%9F%20%E0%AA%95%E0%AB%87%E0%AA%AC%20%E0%AA%AC%E0%AB%81%E0%AA%95%E0%AA%BF%E0%AA%82%E0%AA%97',
    language: 'gu',
    langBadge: 'ગુજરાતી (Gujarati)',
    keywordName: 'રાજકોટ કેબ બુકિંગ',
    pageTitle: 'રાજકોટ કેબ બુકિંગ | ૨૪ કલાક સુરક્ષિત કેબ સર્વિસ રાજકોટ',
    metaDescription: 'રાજકોટ કેબ બુકિંગ - સરળ, ઝડપી અને સસ્તું ટેક્સી બુકિંગ. વ્હોટ્સએપ પર ૧ મિનિટમાં કન્ફર્મેશન મેળવો. કોઈ છુપા ચાર્જ નહીં.',
    headline: 'રાજકોટ કેબ બુકિંગ - ઓનલાઈન અને વ્હોટ્સએપ દ્વારા ત્વરિત બુકિંગ',
    subheadline: 'રાજકોટ લોકલ રાઇડ્સ, હિરાસર એરપોર્ટ ટ્રાન્સફર અને આઉટસ્ટેશન પ્રવાસ માટે તમારી મનપસંદ કેબ ૧ મિનિટમાં બુક કરો.',
    badge: 'સરળ કેબ બુકિંગ પ્રક્રિયા',
    whatsappMessage: 'નમસ્તે રાજકોટ ટેક્સી પોઈન્ટ, મારે રાજકોટ કેબ બુકિંગ કરાવવી છે. કૃપા કરીને વિગત જણાવો.',
    callToAction: 'કેબ બુક કરવા વ્હોટ્સએપ કરો',
    highlights: [
      'વોટ્સએપ પર માત્ર ૧ મિનિટમાં કેબ કન્ફર્મેશન',
      'ઝીરો કેન્સલેશન ચાર્જ અને પારદર્શક મીટર/કિમી ભાવ',
      'જીપીએસ ટ્રેકિંગ અને પ્રશિક્ષિત ડ્રાઇવર્સ',
      'લોકલ સિટી રાઉન્ડ ટ્રીપ અને વન-વે ટેક્સી વિકલ્પો'
    ],
    popularRoutes: [
      { destination: 'રાજકોટ શહેર થી હિરાસર એરપોર્ટ', distance: '30 કિમી', duration: '35 મિનિટ', sedanRate: '₹999 ફિક્સ', ertigaRate: '₹1499 ફિક્સ' },
      { destination: 'રાજકોટ થી સોમનાથ જ્યોતિર્લિંગ', distance: '198 કિમી', duration: '4 કલાક', sedanRate: '₹2,599 થી શરૂ', ertigaRate: '₹3,799 થી શરૂ' },
      { destination: 'રાજકોટ થી દ્વારકાધીશ મંદિર', distance: '225 કિમી', duration: '4.5 કલાક', sedanRate: '₹2,899 થી શરૂ', ertigaRate: '₹4,199 થી શરૂ' },
      { destination: 'રાજકોટ થી અમદાવાદ એરપોર્ટ', distance: '225 કિમી', duration: '3.5 કલાક', sedanRate: '₹2,799 થી શરૂ', ertigaRate: '₹4,100 થી શરૂ' },
      { destination: 'રાજકોટ થી સાસણ ગીર જંગલ', distance: '155 કિમી', duration: '3.5 કલાક', sedanRate: '₹2,399 થી શરૂ', ertigaRate: '₹3,499 થી શરૂ' }
    ],
    faqs: [
      {
        question: 'કેબ બુકિંગ માટે ક્યા દસ્તાવેજ જોઈએ?',
        answer: 'કોઈ દસ્તાવેજની જરૂર નથી! માત્ર તમારું નામ, પીકઅપ સરનામું અને સમય વ્હોટ્સએપ પર મોકલો.'
      },
      {
        question: 'શું વન-વે કેબ ઉપલબ્ધ છે?',
        answer: 'હા, રાજકોટ થી અમદાવાદ, વડોદરા, સુરત, જામનગર વગેરે શહેરો માટે સ્પેશિયલ વન-વે કેબ ઉપલબ્ધ છે જેથી તમારે આવવા-જવાનું ભાડું આપવું ન પડે.'
      }
    ],
    relatedSlugs: [
      { label: 'રાજકોટ ટેક્સી સર્વિસ', slug: 'રાજકોટ ટેક્સી સર્વિસ', lang: 'gu' },
      { label: 'રાજકોટ એરપોર્ટ ટેક્સી', slug: 'રાજકોટ એરપોર્ટ ટેક્સી', lang: 'gu' },
      { label: 'राजकोट कैब बुकिंग', slug: 'राजकोट कैब बुकिंग', lang: 'hi' },
      { label: 'Rajkot Cab Booking', slug: 'rajkot-cab-booking', lang: 'en' }
    ],
    searchKeywords: ['રાજકોટ કેબ બુકિંગ', 'rajkot cab booking', 'rajkot cab', 'cab in rajkot', 'online cab booking rajkot']
  },

  // 3. Gujarati: રાજકોટ એરપોર્ટ ટેક્સી
  'રાજકોટ એરપોર્ટ ટેક્સી': {
    slug: 'રાજકોટ એરપોર્ટ ટેક્સી',
    encodedPath: '/%E0%AA%B0%E0%AA%BE%E0%AA%9C%E0%AA%95%E0%AB%8B%E0%AA%9F%20%E0%AA%8F%E0%AA%B0%E0%AA%AA%E0%AB%8B%E0%AA%B0%E0%AB%8D%E0%AA%9F%20%E0%AA%9F%E0%AB%87%E0%AA%95%E0%AB%8D%E0%AA%B8%E0%AB%80',
    language: 'gu',
    langBadge: 'ગુજરાતી (Gujarati)',
    keywordName: 'રાજકોટ એરપોર્ટ ટેક્સી',
    pageTitle: 'રાજકોટ એરપોર્ટ ટેક્સી | હિરાસર ગ્રીનફિલ્ડ એરપોર્ટ કેબ સેવા',
    metaDescription: 'રાજકોટ હિરાસર ઇન્ટરનેશનલ એરપોર્ટ (Hirasar Airport) માટે ફિક્સ રેટ ટેક્સી સેવા. ફ્લાઇટ ટ્રેકિંગ સાથે સમયસર પીકઅપ અને ડ્રોપ.',
    headline: 'રાજકોટ એરપોર્ટ ટેક્સી - હિરાસર ગ્રીનફિલ્ડ એરપોર્ટ સ્પેશિયલ',
    subheadline: 'રાજકોટ શહેરના કોઈપણ વિસ્તારમાંથી હિરાસર એરપોર્ટ પહોંચો સમયસર અને આરામથી. ફિક્સ રેટ ₹999 થી શરૂ.',
    badge: 'હિરાસર એરપોર્ટ સ્પેશિયાલિસ્ટ',
    whatsappMessage: 'નમસ્તે રાજકોટ ટેક્સી પોઈન્ટ, મારે હિરાસર એરપોર્ટ માટે ટેક્સી બુક કરવી છે.',
    callToAction: 'એરપોર્ટ ટેક્સી બુક કરો',
    highlights: [
      'ફ્લાઇટ ડીલે ટ્રેકિંગ સાથે ૧૦૦% સમયસર પીકઅપ',
      'કોઈ પાર્કિંગ કે ટોલ સરચાર્જ નહીં (પારદર્શક ભાવ)',
      'લગેજ માટે મોટી ડીકી ધરાવતી સેડાન અને એસયુવી ગાડીઓ',
      'ડ્રાઇવર તમારા નામનું બોર્ડ લઈને એરપોર્ટ એક્ઝિટ ગેટ પર મળશે'
    ],
    popularRoutes: [
      { destination: 'રાજકોટ સિટી સેન્ટર થી હિરાસર એરપોર્ટ', distance: '30 કિમી', duration: '35 મિનિટ', sedanRate: '₹999 ફિક્સ', ertigaRate: '₹1499 ફિક્સ' },
      { destination: 'કાલાવડ રોડ થી હિરાસર એરપોર્ટ', distance: '35 કિમી', duration: '40 મિનિટ', sedanRate: '₹1,099 ફિક્સ', ertigaRate: '₹1,599 ફિક્સ' },
      { destination: 'રાજકોટ જંકશન રેલવે સ્ટેશન થી એરપોર્ટ', distance: '28 કિમી', duration: '32 મિનિટ', sedanRate: '₹999 ફિક્સ', ertigaRate: '₹1499 ફિક્સ' }
    ],
    faqs: [
      {
        question: 'ફ્લાઇટ લેટ થાય તો વધારાનો ચાર્જ લાગશે?',
        answer: 'ના, અમે તમારી ફ્લાઇટનું લાઇવ સ્ટેટસ ચેક કરીએ છીએ અને ફ્લાઇટ મોડી પડે તો પણ કોઈ વેઇટિંગ ચાર્જ લેતા નથી.'
      }
    ],
    relatedSlugs: [
      { label: 'રાજકોટ ટેક્સી સર્વિસ', slug: 'રાજકોટ ટેક્સી સર્વિસ', lang: 'gu' },
      { label: 'રાજકોટ કેબ બુકિંગ', slug: 'રાજકોટ કેબ બુકિંગ', lang: 'gu' },
      { label: 'राजकोट एयरपोर्ट टैक्सी', slug: 'राजकोट एयरपोर्ट टैक्सी', lang: 'hi' }
    ],
    searchKeywords: ['રાજકોટ એરપોર્ટ ટેક્સી', 'rajkot airport taxi', 'hirasar airport cab', 'rajkot greenfield airport taxi']
  },

  // 4. Gujarati: રાજકોટ થી અમદાવાદ ટેક્સી
  'રાજકોટ થી અમદાવાદ ટેક્સી': {
    slug: 'રાજકોટ થી અમદાવાદ ટેક્સી',
    encodedPath: '/%E0%AA%B0%E0%AA%BE%E0%AA%9C%E0%AA%95%E0%AB%8B%E0%AA%9F%20%E0%AA%A5%E0%AB%80%20%E0%AA%85%E0%AA%AE%E0%AA%A6%E0%AA%BE%E0%AA%B5%E0%AA%BE%E0%AA%A6%20%E0%AA%9F%E0%AB%87%E0%AA%95%E0%AB%8D%E0%AA%B8%E0%AB%80',
    language: 'gu',
    langBadge: 'ગુજરાતી (Gujarati)',
    keywordName: 'રાજકોટ થી અમદાવાદ ટેક્સી',
    pageTitle: 'રાજકોટ થી અમદાવાદ ટેક્સી | વન-વે અને રાઉન્ડ ટ્રીપ કેબ',
    metaDescription: 'રાજકોટ થી અમદાવાદ વન-વે કેબ અને રાઉન્ડ ટ્રીપ ટેક્સી. અમદાવાદ એરપોર્ટ ડ્રોપ માટે સ્પેશિયલ રેટ્સ. ઝડપી અને આરામદાયક મુસાફરી.',
    headline: 'રાજકોટ થી અમદાવાદ ટેક્સી સર્વિસ - પ્રીમિયમ હાઇવે રાઇડ્સ',
    subheadline: 'રાજકોટ-અમદાવાદ સિક્સ-લેન હાઇવે પર સુવિધાજનક અને સુરક્ષિત પ્રવાસ. સવાર-સાંજ કોઈપણ સમયે ડોરસ્ટેપ પીકઅપ.',
    badge: 'અમદાવાદ રૂટ એક્સપ્રેસ',
    whatsappMessage: 'નમસ્તે રાજકોટ ટેક્સી પોઈન્ટ, મારે રાજકોટ થી અમદાવાદ માટે ટેક્સી ભાડે જોઈએ છે.',
    callToAction: 'અમદાવાદ કેબ બુક કરો',
    highlights: [
      'વન-વે કેબ સેવા ઉપલબ્ધ (પાછા આવવાનું ભાડું ભરવાની જરૂર નથી)',
      'સરદાર વલ્લભભાઈ પટેલ ઇન્ટરનેશનલ એરપોર્ટ અમદાવાદ માટે ડાયરેક્ટ ડ્રોપ',
      'માત્ર ૩ થી ૩.૫ કલાકમાં આરામદાયક મુસાફરી',
      'પરિવાર માટે અનુકૂળ ૬ સીટર Ertiga અને Innova વિકલ્પો'
    ],
    popularRoutes: [
      { destination: 'રાજકોટ થી અમદાવાદ વન-વે (Sedan)', distance: '215 કિમી', duration: '3.5 કલાક', sedanRate: '₹2,699 ફિક્સ', ertigaRate: '₹3,999 ફિક્સ' },
      { destination: 'રાજકોટ થી અમદાવાદ એરપોર્ટ વન-વે', distance: '225 કિમી', duration: '3.5 કલાક', sedanRate: '₹2,799 ફિક્સ', ertigaRate: '₹4,100 ફિક્સ' },
      { destination: 'રાજકોટ થી અમદાવાદ સેમ-ડે રાઉન્ડ ટ્રીપ', distance: '450 કિમી', duration: 'સંપૂર્ણ દિવસ', sedanRate: '₹4,999 ફિક્સ', ertigaRate: '₹6,999 ફિક્સ' }
    ],
    faqs: [
      {
        question: 'રાજકોટ થી અમદાવાદ મુસાફરીમાં કેટલો સમય લાગે છે?',
        answer: 'નવા સિક્સ લેન હાઇવેના કારણે સામાન્ય રીતે ૩ થી ૩.૫ કલાકનો સમય લાગે છે.'
      }
    ],
    relatedSlugs: [
      { label: 'રાજકોટ ટેક્સી સર્વિસ', slug: 'રાજકોટ ટેક્સી સર્વિસ', lang: 'gu' },
      { label: 'રાજકોટ કેબ બુકિંગ', slug: 'રાજકોટ કેબ બુકિંગ', lang: 'gu' },
      { label: 'Rajkot to Ahmedabad Taxi', slug: 'rajkot-taxi', lang: 'en' }
    ],
    searchKeywords: ['રાજકોટ થી અમદાવાદ ટેક્સી', 'rajkot to ahmedabad taxi', 'rajkot ahmedabad cab', 'rajkot to ahmedabad one way taxi']
  },

  // 5. Hindi: राजकोट टैक्सी सेवा
  'राजकोट टैक्सी सेवा': {
    slug: 'राजकोट टैक्सी सेवा',
    encodedPath: '/%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A4%95%E0%A5%8B%E0%A4%9F%20%E0%A4%9F%E0%A5%88%E0%A4%95%E0%A5%8D%E0%A4%B8%E0%A5%80%20%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE',
    language: 'hi',
    langBadge: 'हिंदी (Hindi)',
    keywordName: 'राजकोट टैक्सी सेवा',
    pageTitle: 'राजकोट टैक्सी सेवा | Rajkot Taxi Point – सबसे भरोसेमंद कैब सर्विस',
    metaDescription: 'राजकोट टैक्सी सेवा - हीरासर एयरपोर्ट, सोमनाथ, द्वारका और अहमदाबाद के लिए सस्ती, सुरक्षित एसी कैब बुक करें। नो एडवांस पेमेंट, तुरंत बुकिंग।',
    headline: 'राजकोट टैक्सी सेवा - 24 घंटे विश्वसनीय और सुरक्षित कैब',
    subheadline: 'राजकोट शहर, हीरासर इंटरनेशनल एयरपोर्ट और पूरे गुजरात में पर्यटन व बिजनेस यात्रा के लिए स्वच्छ एसी टैक्सियाँ और पेशेवर ड्राइवर।',
    badge: 'राजकोट की सर्वश्रेष्ठ टैक्सी सेवा',
    whatsappMessage: 'नमस्ते राजकोट टैक्सी पॉइंट, मुझे राजकोट में टैक्सी सेवा के बारे में जानकारी चाहिए और कैब बुक करनी है।',
    callToAction: 'अभी टैक्सी बुक करें',
    highlights: [
      'कोई एडवांस पेमेंट आवश्यक नहीं (सफर पूरा होने पर भुगतान करें)',
      '24 घंटे हीरासर ग्रीनफील्ड एयरपोर्ट पिकअप एवं ड्रॉप सुविधा',
      'स्वच्छ, सैनिटाइज्ड एवं एसी गाड़ियां (Maruti Dzire, Ertiga, Innova)',
      'सोमनाथ ज्योतिर्लिंग, द्वारकाधीश मंदिर एवं सासन गिर स्पेशल पैकेज'
    ],
    popularRoutes: [
      { destination: 'राजकोट से हीरासर एयरपोर्ट', distance: '30 किमी', duration: '35 मिनट', sedanRate: '₹999 फिक्स', ertigaRate: '₹1499 फिक्स' },
      { destination: 'राजकोट से अहमदाबाद', distance: '215 किमी', duration: '3.5 घंटे', sedanRate: '₹2,699 से शुरू', ertigaRate: '₹3,999 से शुरू' },
      { destination: 'राजकोट से सोमनाथ मंदिर', distance: '198 किमी', duration: '4 घंटे', sedanRate: '₹2,599 से शुरू', ertigaRate: '₹3,799 से शुरू' },
      { destination: 'राजकोट से द्वारका', distance: '225 किमी', duration: '4.5 घंटे', sedanRate: '₹2,899 से शुरू', ertigaRate: '₹4,199 से शुरू' },
      { destination: 'राजकोट लोकल सिटी (8 घंटे / 80 किमी)', distance: '80 किमी', duration: '8 घंटे', sedanRate: '₹1,500', ertigaRate: '₹2,200' }
    ],
    faqs: [
      {
        question: 'राजकोट में टैक्सी कैसे बुक करें?',
        answer: 'आप सीधे हमारे डेमो व्हाट्सएप नंबर पर मैसेज भेज सकते हैं या कॉल कर सकते हैं। बुकिंग 1 मिनट में कंफर्म हो जाती है।'
      },
      {
        question: 'क्या वन-वे (One Way) कैब की सुविधा है?',
        answer: 'हाँ, राजकोट से अहमदाबाद, वडोदरा, सूरत और जामनगर के लिए वन-वे कैब उपलब्ध है, जिसमें आपको वापसी का किराया नहीं देना पड़ता।'
      },
      {
        question: 'क्या रात में भी कैब उपलब्ध रहती है?',
        answer: 'जी हाँ, हमारी कैब सेवा 24 घंटे उपलब्ध है। देर रात या तड़के की फ्लाइट और ट्रेनों के लिए भी समय पर कैब मिलती है।'
      }
    ],
    relatedSlugs: [
      { label: 'राजकोट कैब बुकिंग', slug: 'राजकोट कैब बुकिंग', lang: 'hi' },
      { label: 'રાજકોટ ટેક્સી સર્વિસ', slug: 'રાજકોટ ટેક્સી સર્વિસ', lang: 'gu' },
      { label: 'રાજકોટ કેબ બુકિંગ', slug: 'રાજકોટ કેબ બુકિંગ', lang: 'gu' },
      { label: 'Rajkot Taxi Service', slug: 'rajkot-taxi', lang: 'en' }
    ],
    searchKeywords: ['राजकोट टैक्सी सेवा', 'rajkot taxi seva', 'rajkot taxi', 'rajkot cab booking', 'rajkot cab']
  },

  // 6. Hindi: राजकोट कैब बुकिंग
  'राजकोट कैब बुकिंग': {
    slug: 'राजकोट कैब बुकिंग',
    encodedPath: '/%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A4%95%E0%A5%8B%E0%A4%9F%20%E0%A4%95%E0%A5%88%E0%A4%AC%20%E0%A4%AC%E0%A5%81%E0%A4%95%E0%A4%BF%E0%A4%82%E0%A4%97',
    language: 'hi',
    langBadge: 'हिंदी (Hindi)',
    keywordName: 'राजकोट कैब बुकिंग',
    pageTitle: 'राजकोट कैब बुकिंग | तुरंत ऑनलाइन और व्हाट्सएप कैब बुकिंग',
    metaDescription: 'राजकोट कैब बुकिंग - आसान, भरोसेमंद और किफ़ायती कैब सर्विस। व्हाट्सएप पर मात्र 1 मिनट में बुकिंग। लोकल और आउटस्टेशन ट्रिप्स।',
    headline: 'राजकोट कैब बुकिंग - आसान और पारदर्शी यात्रा',
    subheadline: 'बिना किसी परेशानी के तुरंत कैब बुक करें। नो कैंसलेशन चार्ज, शून्य अग्रिम भुगतान और बेहतरीन ड्राइविंग अनुभव।',
    badge: 'तुरंत कैब बुकिंग',
    whatsappMessage: 'नमस्ते, मुझे राजकोट कैब बुकिंग करनी है। कृपया उपलब्ध गाड़ियां और किराया बताएं।',
    callToAction: 'व्हाट्सएप पर कैब बुक करें',
    highlights: [
      'व्हाट्सएप पर 1 मिनट में बुकिंग और ड्राइवर डिटेल्स',
      'पारदर्शी दरें - कोई छुपा हुआ शुल्क नहीं',
      'कुशल, विनम्र एवं स्थानीय मार्गों के जानकार चालक',
      'साफ-सुथरी और आरामदायक वातानुकूलित (AC) गाड़ियां'
    ],
    popularRoutes: [
      { destination: 'राजकोट से हीरासर एयरपोर्ट', distance: '30 किमी', duration: '35 मिनट', sedanRate: '₹999 फिक्स', ertigaRate: '₹1499 फिक्स' },
      { destination: 'राजकोट से सोमनाथ', distance: '198 किमी', duration: '4 घंटे', sedanRate: '₹2,599 से शुरू', ertigaRate: '₹3,799 से शुरू' },
      { destination: 'राजकोट से द्वारका', distance: '225 किमी', duration: '4.5 घंटे', sedanRate: '₹2,899 से शुरू', ertigaRate: '₹4,199 से शुरू' },
      { destination: 'राजकोट से अहमदाबाद', distance: '215 किमी', duration: '3.5 घंटे', sedanRate: '₹2,699 से शुरू', ertigaRate: '₹3,999 से शुरू' }
    ],
    faqs: [
      {
        question: 'क्या फैमिली टूर के लिए 6-7 सीटर गाड़ियां हैं?',
        answer: 'हाँ, हमारे पास 6-7 सीटर Maruti Ertiga और Toyota Innova Crysta गाड़ियां उपलब्ध हैं जो फैमिली के लिए बहुत आरामदायक हैं।'
      }
    ],
    relatedSlugs: [
      { label: 'राजकोट टैक्सी सेवा', slug: 'राजकोट टैक्सी सेवा', lang: 'hi' },
      { label: 'રાજકોટ ટેક્સી સર્વિસ', slug: 'રાજકોટ ટેક્સી સર્વિસ', lang: 'gu' },
      { label: 'Rajkot Cab Booking', slug: 'rajkot-cab-booking', lang: 'en' }
    ],
    searchKeywords: ['राजकोट कैब बुकिंग', 'rajkot cab booking', 'cab in rajkot', 'rajkot taxi']
  },

  // 7. English / Transliterated: rajkot-taxi
  'rajkot-taxi': {
    slug: 'rajkot-taxi',
    encodedPath: '/rajkot-taxi',
    language: 'en',
    langBadge: 'English (Transliterated)',
    keywordName: 'Rajkot Taxi',
    pageTitle: 'Rajkot Taxi Service | Reliable 24x7 Cabs in Rajkot – Taxi Point',
    metaDescription: 'Book reliable Rajkot Taxi for Hirasar Airport pickups, local city travel, and outstation trips to Somnath, Dwarka & Ahmedabad. From ₹11/km.',
    headline: 'Rajkot Taxi – Top-Rated Local & Outstation Cabs',
    subheadline: 'Trusted by thousands of travelers for punctual airport transfers, comfortable city rides, and Saurashtra temple pilgrimage tours.',
    badge: 'Best Taxi in Rajkot',
    whatsappMessage: 'Hello Rajkot Taxi Point, I would like to enquire about taxi booking in Rajkot.',
    callToAction: 'Book Taxi on WhatsApp',
    highlights: [
      'No Advance Payment Required - Pay after your ride',
      'Punctual Hirasar Airport (HSR) Pickups & Drops',
      'Clean Commercial Yellow-Plate Cabs with Full AC',
      'Sedan (Dzire/Aura) and SUV (Ertiga/Innova) available'
    ],
    popularRoutes: [
      { destination: 'Rajkot to Hirasar Airport', distance: '30 km', duration: '35 mins', sedanRate: '₹999 Flat', ertigaRate: '₹1,499 Flat' },
      { destination: 'Rajkot to Ahmedabad', distance: '215 km', duration: '3.5 hrs', sedanRate: 'From ₹2,699', ertigaRate: 'From ₹3,999' },
      { destination: 'Rajkot to Somnath Temple', distance: '198 km', duration: '4 hrs', sedanRate: 'From ₹2,599', ertigaRate: 'From ₹3,799' },
      { destination: 'Rajkot to Dwarka', distance: '225 km', duration: '4.5 hrs', sedanRate: 'From ₹2,899', ertigaRate: 'From ₹4,199' },
      { destination: 'Rajkot Local City (8 Hr / 80 Km)', distance: '80 km', duration: '8 hrs', sedanRate: '₹1,500', ertigaRate: '₹2,200' }
    ],
    faqs: [
      {
        question: 'How do I book a taxi with Rajkot Taxi Point?',
        answer: 'Simply tap the WhatsApp button or call our hotline. Share your pickup address and travel time, and your cab will be confirmed in 1 minute without any advance deposit.'
      },
      {
        question: 'Are there hidden charges like night allowance or toll fees?',
        answer: 'No hidden charges. We offer completely transparent rate breakdowns upfront.'
      }
    ],
    relatedSlugs: [
      { label: 'રાજકોટ ટેક્સી સર્વિસ', slug: 'રાજકોટ ટેક્સી સર્વિસ', lang: 'gu' },
      { label: 'રાજકોટ કેબ બુકિંગ', slug: 'રાજકોટ કેબ બુકિંગ', lang: 'gu' },
      { label: 'राजकोट टैक्सी सेवा', slug: 'राजकोट टैक्सी सेवा', lang: 'hi' },
      { label: 'Rajkot Cab Booking', slug: 'rajkot-cab-booking', lang: 'en' },
      { label: 'Rajkot Cab', slug: 'rajkot-cab', lang: 'en' }
    ],
    searchKeywords: ['rajkot taxi', 'rajkot taxi service', 'taxi in rajkot', 'rajkot cab', 'rajkot airport taxi']
  },

  // 8. English / Transliterated: rajkot-cab-booking
  'rajkot-cab-booking': {
    slug: 'rajkot-cab-booking',
    encodedPath: '/rajkot-cab-booking',
    language: 'en',
    langBadge: 'English (Transliterated)',
    keywordName: 'Rajkot Cab Booking',
    pageTitle: 'Rajkot Cab Booking | Instant Online & WhatsApp Cab Reservation',
    metaDescription: 'Instant Rajkot Cab Booking online. Book reliable AC cabs for local Rajkot sightseeing, airport transfers, and outstation Saurashtra trips.',
    headline: 'Rajkot Cab Booking – Instant, Simple & Transparent',
    subheadline: 'Effortless cab booking in Rajkot with zero advance deposit, verified drivers, and 100% on-time pickup guarantee.',
    badge: 'Instant Cab Reservation',
    whatsappMessage: 'Hello, I want to make a Rajkot Cab Booking. Please share vehicle rates and availability.',
    callToAction: 'Book Cab Instantly',
    highlights: [
      'Instant WhatsApp booking confirmation in under 60 seconds',
      'Clean & sanitized sedans and spacious 6-7 seater MPVs',
      'GPS tracked cabs for passenger safety & peace of mind',
      'Special one-way fares for Ahmedabad and Vadodara'
    ],
    popularRoutes: [
      { destination: 'Rajkot to Hirasar Airport Transfer', distance: '30 km', duration: '35 mins', sedanRate: '₹999 Flat', ertigaRate: '₹1,499 Flat' },
      { destination: 'Rajkot to Ahmedabad City / Airport', distance: '215 km', duration: '3.5 hrs', sedanRate: 'From ₹2,699', ertigaRate: 'From ₹3,999' },
      { destination: 'Rajkot to Somnath & Gir Forest', distance: '200 km', duration: '4 hrs', sedanRate: 'From ₹2,599', ertigaRate: 'From ₹3,799' },
      { destination: 'Rajkot to Dwarka & Bet Dwarka', distance: '225 km', duration: '4.5 hrs', sedanRate: 'From ₹2,899', ertigaRate: 'From ₹4,199' }
    ],
    faqs: [
      {
        question: 'Can I book a cab for local Rajkot meetings or shopping?',
        answer: 'Yes! We offer 4 Hr / 40 Km and 8 Hr / 80 Km local packages with unlimited stops across Rajkot city.'
      }
    ],
    relatedSlugs: [
      { label: 'Rajkot Taxi', slug: 'rajkot-taxi', lang: 'en' },
      { label: 'Rajkot Cab', slug: 'rajkot-cab', lang: 'en' },
      { label: 'રાજકોટ ટેક્સી સર્વિસ', slug: 'રાજકોટ ટેક્સી સર્વિસ', lang: 'gu' },
      { label: 'राजकोट टैक्सी सेवा', slug: 'राजकोट टैक्सी सेवा', lang: 'hi' }
    ],
    searchKeywords: ['rajkot cab booking', 'cab booking in rajkot', 'online cab rajkot', 'rajkot taxi']
  },

  // 9. English / Transliterated: rajkot-cab
  'rajkot-cab': {
    slug: 'rajkot-cab',
    encodedPath: '/rajkot-cab',
    language: 'en',
    langBadge: 'English (Transliterated)',
    keywordName: 'Rajkot Cab',
    pageTitle: 'Rajkot Cab | 24x7 Affordable & Sanitized Cabs in Rajkot',
    metaDescription: 'Looking for a reliable Rajkot Cab? Get clean AC cabs with courteous drivers for local city travel and outstation tours. Book in 1 minute.',
    headline: 'Rajkot Cab – Fast, Safe & Affordable Rides',
    subheadline: 'Your daily travel partner in Rajkot. Quick pickups anywhere in Kalawad Road, Ring Road, Mavdi, Trikon Baug, and Junction.',
    badge: 'Verified Commercial Cabs',
    whatsappMessage: 'Hello Rajkot Taxi Point, I need a Rajkot Cab for travel.',
    callToAction: 'Book a Rajkot Cab Now',
    highlights: [
      'Rapid pickup across all Rajkot residential and commercial areas',
      'Courteous drivers with extensive Saurashtra route knowledge',
      'Affordable per-kilometer rates starting at ₹11/km',
      'No surges or cancellation fees'
    ],
    popularRoutes: [
      { destination: 'Rajkot to Hirasar Airport', distance: '30 km', duration: '35 mins', sedanRate: '₹999 Flat', ertigaRate: '₹1,499 Flat' },
      { destination: 'Rajkot to Ahmedabad', distance: '215 km', duration: '3.5 hrs', sedanRate: 'From ₹2,699', ertigaRate: 'From ₹3,999' },
      { destination: 'Rajkot to Jamnagar', distance: '90 km', duration: '1.5 hrs', sedanRate: 'From ₹1,499', ertigaRate: 'From ₹2,199' },
      { destination: 'Rajkot to Junagadh', distance: '105 km', duration: '2 hrs', sedanRate: 'From ₹1,699', ertigaRate: 'From ₹2,499' }
    ],
    faqs: [
      {
        question: 'Is luggage space sufficient in Dzire and Ertiga?',
        answer: 'Yes! Dzire easily accommodates 2 large + 2 small suitcases, while Ertiga MPV accommodates up to 4-5 luggage pieces.'
      }
    ],
    relatedSlugs: [
      { label: 'Rajkot Taxi', slug: 'rajkot-taxi', lang: 'en' },
      { label: 'Rajkot Cab Booking', slug: 'rajkot-cab-booking', lang: 'en' },
      { label: 'રાજકોટ ટેક્સી સર્વિસ', slug: 'રાજકોટ ટેક્સી સર્વિસ', lang: 'gu' },
      { label: 'राजकोट टैक्सी सेवा', slug: 'राजकोट टैक्सी सेवा', lang: 'hi' }
    ],
    searchKeywords: ['rajkot cab', 'rajkot taxi', 'cab in rajkot', 'rajkot car rental']
  }
};

/**
 * Normalizes a URL slug or search query and finds the matching SEO data.
 * Handles:
 * - Direct decoded Unicode (e.g. "રાજકોટ ટેક્સી સર્વિસ")
 * - URL encoded strings (e.g. "%E0%AA%B0...")
 * - Hyphenated transliterations ("rajkot-taxi-service" -> "રાજકોટ ટેક્સી સર્વિસ" or "rajkot-taxi")
 * - Space variations ("rajkot taxi", "rajkot cab booking")
 */
export function findSeoDataBySlug(rawSlug: string): MultilingualSeoEntry {
  let decoded = '';
  try {
    decoded = decodeURIComponent(rawSlug).trim();
  } catch {
    decoded = rawSlug.trim();
  }

  // Remove leading/trailing slashes
  decoded = decoded.replace(/^\/+|\/+$/g, '');

  // 1. Direct match in dictionary
  if (MULTILINGUAL_SEO_PAGES[decoded]) {
    return MULTILINGUAL_SEO_PAGES[decoded];
  }

  // 2. Normalize hyphens and spaces
  const normalizedLower = decoded.toLowerCase().replace(/[-_]+/g, ' ');

  // Look for exact normalized match
  for (const [key, data] of Object.entries(MULTILINGUAL_SEO_PAGES)) {
    if (key.toLowerCase() === decoded.toLowerCase() || key.toLowerCase() === normalizedLower) {
      return data;
    }
    // Check search keywords
    if (data.searchKeywords.some(kw => kw.toLowerCase() === normalizedLower || kw.toLowerCase() === decoded.toLowerCase())) {
      return data;
    }
  }

  // 3. Heuristic matching:
  // If slug contains Gujarati script or mentions "રાજકોટ"
  if (/[\u0A80-\u0AFF]/.test(decoded)) {
    if (decoded.includes('કેબ') || decoded.includes('બુકિંગ')) {
      return MULTILINGUAL_SEO_PAGES['રાજકોટ કેબ બુકિંગ'];
    }
    if (decoded.includes('એરપોર્ટ')) {
      return MULTILINGUAL_SEO_PAGES['રાજકોટ એરપોર્ટ ટેક્સી'];
    }
    if (decoded.includes('અમદાવાદ')) {
      return MULTILINGUAL_SEO_PAGES['રાજકોટ થી અમદાવાદ ટેક્સી'];
    }
    return MULTILINGUAL_SEO_PAGES['રાજકોટ ટેક્સી સર્વિસ'];
  }

  // If slug contains Hindi / Devanagari script or mentions "राजकोट"
  if (/[\u0900-\u097F]/.test(decoded)) {
    if (decoded.includes('कैब') || decoded.includes('बुकिंग')) {
      return MULTILINGUAL_SEO_PAGES['राजकोट कैब बुकिंग'];
    }
    return MULTILINGUAL_SEO_PAGES['राजकोट टैक्सी सेवा'];
  }

  // If slug mentions "booking" or "cab"
  if (normalizedLower.includes('booking')) {
    return MULTILINGUAL_SEO_PAGES['rajkot-cab-booking'];
  }
  if (normalizedLower.includes('cab')) {
    return MULTILINGUAL_SEO_PAGES['rajkot-cab'];
  }

  // Default fallback is primary Gujarati "રાજકોટ ટેક્સી સર્વિસ" or "rajkot-taxi"
  return MULTILINGUAL_SEO_PAGES['રાજકોટ ટેક્સી સર્વિસ'];
}
