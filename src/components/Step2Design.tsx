import '../styles/index.css';
import { BACKGROUND_IMAGES, PRESET_CAPTIONS } from '../types';

interface Step2DesignProps {
  selectedBackground: string | null;
  onSelectBackground: (bg: string) => void;
  selectedCaption: string | null;
  onSelectCaption: (caption: string) => void;
  customCaption: string;
  onCustomCaptionChange: (value: string) => void;
  selectedNominal: number | null;
}

export const Step2Design: React.FC<Step2DesignProps> = ({
  selectedBackground,
  onSelectBackground,
  selectedCaption,
  onSelectCaption,
  customCaption,
  onCustomCaptionChange,
  selectedNominal
}) => {
  const handleSelectCaption = (caption: string) => {
    onSelectCaption(caption);
    onCustomCaptionChange('');
  };

  const handleCustomCaption = (value: string) => {
    onCustomCaptionChange(value);
    if (value.trim()) {
      onSelectCaption(value);
    }
  };

  const displayCaption = customCaption || selectedCaption;

  return (
    <div>
      <h3 className="text-xl font-light mb-2">Выберите фон</h3>
      <p className="text-sm text-gray-500 mb-4">Оформление электронного сертификата</p>

      <div className="grid grid-cols-4 gap-2 mb-6">
        {Object.entries(BACKGROUND_IMAGES).map(([key, url]) => (
          <button
            key={key}
            className={`design-card border-2 border-gray-200 rounded-lg overflow-hidden ${
              selectedBackground === key ? 'selected' : ''
            }`}
            onClick={() => onSelectBackground(key)}
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={url}
                alt={`Фон ${key}`}
                className="w-[200%] h-[200%] object-cover object-right-bottom"
              />
            </div>
          </button>
        ))}
      </div>

      {selectedBackground && (
        <div className="fade-in">
          <h4 className="text-sm font-medium mb-3">Выберите надпись</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {PRESET_CAPTIONS.map(caption => (
              <button
                key={caption}
                className={`caption-card px-4 py-2 border border-gray-200 rounded-full text-sm hover:border-gray-400 transition-colors ${
                  displayCaption === caption ? 'selected' : ''
                }`}
                onClick={() => handleSelectCaption(caption)}
              >
                {caption}
              </button>
            ))}
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              maxLength={30}
              placeholder="Или введите свою надпись..."
              value={customCaption}
              onChange={e => handleCustomCaption(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm pr-16"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-300">
              {customCaption.length}/30
            </span>
          </div>

          {selectedBackground && (
            <div className="fade-in">
              <p className="text-xs text-gray-500 mb-2">Предпросмотр</p>
              <div className="rounded-xl overflow-hidden relative">
                <img
                  src={BACKGROUND_IMAGES[selectedBackground as keyof typeof BACKGROUND_IMAGES]}
                  alt="Превью сертификата"
                  className="w-full aspect-[16/9] object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                  <p className="text-xs tracking-[0.2em] text-white/80 mb-1">UVI JEWELRY</p>
                  {displayCaption && (
                    <p className="text-sm text-white mb-1">{displayCaption}</p>
                  )}
                  {selectedNominal && (
                    <p className="text-3xl text-white font-light">
                      {selectedNominal.toLocaleString('ru-RU')} ₽
                    </p>
                  )}
                  <p className="text-xs text-white/70 mt-1">Подарочный сертификат</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
