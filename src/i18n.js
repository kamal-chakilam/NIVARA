import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to NIVARA",
      selectService: "Select a Service",
      emergency: "Emergency",
      nonEmergency: "Non-Emergency",
      bookingSuccess: "Booking submitted successfully!",
      submitBooking: "Submit Booking",
      backToServices: "Back to Services",
      namePlaceholder: "Your Name",
      phonePlaceholder: "Phone Number",
      addressPlaceholder: "Address",
      login: "Login",
      logout: "Logout",
      register: "Register",
      emailPlaceholder: "Email Address",
      passwordPlaceholder: "Password",
      confirmPasswordPlaceholder: "Confirm Password",
      registrationSuccess: "Registration successful! Please log in.",
      bookingFor: "Booking for",
      providerProfile: "Provider Profile",
      bookingStatus: "Booking Status",
      trackingId: "Tracking ID",
      checkStatus: "Check Status",
      statusPending: "Pending",
      statusConfirmed: "Confirmed",
      statusCompleted: "Completed"
    }
  },
  hi: {
    translation: {
      welcome: "निवारा में आपका स्वागत है",
      selectService: "सेवा चुनें",
      emergency: "आपातकालीन",
      nonEmergency: "गैर-आपातकालीन",
      bookingSuccess: "बुकिंग सफलतापूर्वक जमा हो गई!",
      submitBooking: "बुकिंग जमा करें",
      backToServices: "सेवाओं पर वापस जाएं",
      namePlaceholder: "आपका नाम",
      phonePlaceholder: "फोन नंबर",
      addressPlaceholder: "पता",
      login: "लॉगिन करें",
      logout: "लॉगआउट",
      register: "रजिस्टर करें",
      emailPlaceholder: "ईमेल पता",
      passwordPlaceholder: "पासवर्ड",
      confirmPasswordPlaceholder: "पासवर्ड पुष्टि करें",
      registrationSuccess: "पंजीकरण सफल! कृपया लॉगिन करें।",
      bookingFor: "बुकिंग के लिए",
      providerProfile: "प्रदाता प्रोफ़ाइल",
      bookingStatus: "बुकिंग स्थिति",
      trackingId: "ट्रैकिंग आईडी",
      checkStatus: "स्थिति जांचें",
      statusPending: "लंबित",
      statusConfirmed: "पुष्टिकृत",
      statusCompleted: "पूरा हुआ"
    }
  },
  te: {
    translation: {
      welcome: "నివరాకు స్వాగతం",
      selectService: "సేవను ఎంచుకోండి",
      emergency: "అత్యవసర",
      nonEmergency: "అసమయం",
      bookingSuccess: "బుకింగ్ విజయవంతంగా సమర్పించబడింది!",
      submitBooking: "బుకింగ్ సమర్పించండి",
      backToServices: "సేవలకు తిరిగి వెళ్ళండి",
      namePlaceholder: "మీ పేరు",
      phonePlaceholder: "ఫోన్ నంబర్",
      addressPlaceholder: "చిరునామా",
      login: "లాగిన్",
      logout: "లాగ్ అవుట్",
      register: "రిజిస్టర్",
      emailPlaceholder: "ఇమెయిల్ చిరునామా",
      passwordPlaceholder: "పాస్వర్డ్",
      confirmPasswordPlaceholder: "పాస్వర్డ్ నిర్ధారణ",
      registrationSuccess: "రిజిస్ట్రేషన్ విజయవంతం! దయచేసి లాగిన్ అవ్వండి.",
      bookingFor: "బుకింగ్ కోసం",
      providerProfile: "ప్రొవైడర్ ప్రొఫైల్",
      bookingStatus: "బుకింగ్ స్థితి",
      trackingId: "ట్రాకింగ్ ఐడీ",
      checkStatus: "స్థితిని తనిఖీ చేయండి",
      statusPending: "పెండింగ్",
      statusConfirmed: "ఖరారు అయింది",
      statusCompleted: "పూర్తయింది"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
