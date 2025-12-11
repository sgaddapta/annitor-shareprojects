export interface ContactI18nData {
  pageTitle: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  formTitle: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  formSubtitle: {
    es: string;
    en: string;
    fr: string;
    it: string;
  };
  formFields: {
    name: {
      es: string;
      en: string;
      fr: string;
      it: string;
    };
    email: {
      es: string;
      en: string;
      fr: string;
      it: string;
    };
    message: {
      es: string;
      en: string;
      fr: string;
      it: string;
    };
    submit: {
      es: string;
      en: string;
      fr: string;
      it: string;
    };
  };
  placeholders: {
    name: {
      es: string;
      en: string;
      fr: string;
      it: string;
    };
    email: {
      es: string;
      en: string;
      fr: string;
      it: string;
    };
    message: {
      es: string;
      en: string;
      fr: string;
      it: string;
    };
  };
}

export const contactI18nData: ContactI18nData = {
  pageTitle: {
    es: 'Contáctanos',
    en: 'Contact Us',
    fr: 'Nous Contacter',
    it: 'Contattaci'
  },
  formTitle: {
    es: '¡Nos Encantaría Saber de Ti!',
    en: 'We\'d Love to Hear From!',
    fr: 'Nous Aimerions Avoir de Vos Nouvelles!',
    it: 'Ci Piacerebbe Sentirti!'
  },
  formSubtitle: {
    es: '¿Tienes una pregunta o una idea que compartir? Ponte en contacto con nosotros: estamos aquí para escuchar y felices de conectar.',
    en: 'Have a question or an idea to share? Get in touch with us — we\'re here to listen and happy to connect.',
    fr: 'Vous avez une question ou une idée à partager? Contactez-nous — nous sommes là pour écouter et heureux de nous connecter.',
    it: 'Hai una domanda o un\'idea da condividere? Mettiti in contatto con noi — siamo qui per ascoltare e felici di connetterci.'
  },
  formFields: {
    name: {
      es: 'Tu nombre*',
      en: 'Your name*',
      fr: 'Votre nom*',
      it: 'Il tuo nome*'
    },
    email: {
      es: 'Tu Email*',
      en: 'Your Email*',
      fr: 'Votre Email*',
      it: 'La tua Email*'
    },
    message: {
      es: 'Escribir Mensaje*',
      en: 'Write Message*',
      fr: 'Écrire un Message*',
      it: 'Scrivi Messaggio*'
    },
    submit: {
      es: 'Enviar Mensaje',
      en: 'Send Message',
      fr: 'Envoyer le Message',
      it: 'Invia Messaggio'
    }
  },
  placeholders: {
    name: {
      es: 'Tu Nombre',
      en: 'Your Name',
      fr: 'Votre Nom',
      it: 'Il Tuo Nome'
    },
    email: {
      es: 'Dirección de Email',
      en: 'Email Address',
      fr: 'Adresse Email',
      it: 'Indirizzo Email'
    },
    message: {
      es: 'Escribir Mensaje',
      en: 'Write Message',
      fr: 'Écrire un Message',
      it: 'Scrivi Messaggio'
    }
  }
};