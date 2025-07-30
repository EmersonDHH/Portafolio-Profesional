import { useTranslation } from 'react-i18next';

export default function LanguageSwitch() {
    const { i18n } = useTranslation();
    const isSpanish = i18n.language === 'es';

    const handleToggle = () => {
        i18n.changeLanguage(isSpanish ? 'en' : 'es');
    };

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={isSpanish}
                onChange={handleToggle}
            />
            <div className="relative w-11 h-6 bg-[#2D2D2D] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4ACAE2] rounded-full peer peer-checked:bg-[#4ACAE2] transition-colors
                            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                            after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                          after:bg-white after:border-[#B3B3B3] after:border after:rounded-full
                            after:h-5 after:w-5 after:transition-all duration-1000 ease-in-out"></div>
            <span className="ms-3 text-sm font-medium text-gray-200">
                {isSpanish ? 'ES' : 'EN'}
            </span>
        </label>
    );
}
