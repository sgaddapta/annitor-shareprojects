import { useLanguage, Language } from '@/hooks/useLanguage';

const languages = [
  { code: 'es' as Language, label: 'Español', flag: '🇪🇸' },
  { code: 'en' as Language, label: 'English', flag: '🇬🇧' },
  { code: 'fr' as Language, label: 'Français', flag: '🇫🇷' },
  { code: 'it' as Language, label: 'Italiano', flag: '🇮🇹' }
];

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="language-selector">
      <div className="dropdown">
        <button 
          className="btn btn-sm dropdown-toggle d-flex align-items-center gap-2" 
          type="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
          style={{ 
            backgroundColor: 'transparent',
            border: '1px solid rgba(119, 184, 15, 0.3)',
            color: '#77B80F',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          <span>{currentLang?.flag}</span>
          <span>{currentLang?.label}</span>
        </button>
        <ul className="dropdown-menu">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={`dropdown-item d-flex align-items-center gap-2 ${
                  currentLanguage === lang.code ? 'active' : ''
                }`}
                onClick={() => setLanguage(lang.code)}
                style={{
                  fontSize: '14px',
                  padding: '8px 16px'
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;