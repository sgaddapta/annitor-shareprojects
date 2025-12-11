import { useLanguage, Language } from '@/hooks/useLanguage';

const languages = [
  { code: 'es' as Language, label: 'ES' },
  { code: 'en' as Language, label: 'EN' },
  { code: 'fr' as Language, label: 'FR' },
  { code: 'it' as Language, label: 'IT' }
];

const LanguageSelectorSimple = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="language-selector-simple d-flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`btn btn-sm ${
            currentLanguage === lang.code 
              ? 'btn-primary' 
              : 'btn-outline-light'
          }`}
          style={{
            minWidth: '40px',
            fontSize: '12px',
            padding: '4px 8px'
          }}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelectorSimple;