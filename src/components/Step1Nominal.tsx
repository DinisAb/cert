interface Step1NominalProps {
  selectedNominal: number | null;
  onSelectNominal: (amount: number) => void;
  customAmountOpen: boolean;
  onToggleCustomAmount: () => void;
  customAmount: number | null;
  onCustomAmountChange: (value: string) => void;
}

const PRESET_AMOUNTS = [3000, 5000, 10000, 15000];

export const Step1Nominal: React.FC<Step1NominalProps> = ({
  selectedNominal,
  onSelectNominal,
  customAmountOpen,
  onToggleCustomAmount,
  customAmount,
  onCustomAmountChange
}) => {
  return (
    <div>
      <h3 className="text-xl font-light mb-2">Выберите номинал</h3>
      <p className="text-sm text-gray-500 mb-6">Стоимость подарочного сертификата</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {PRESET_AMOUNTS.map(amount => (
          <button
            key={amount}
            className={`nominal-card border border-gray-200 rounded-xl p-4 text-center ${
              selectedNominal === amount ? 'selected' : ''
            }`}
            onClick={() => onSelectNominal(amount)}
          >
            <span className="price-text text-lg gold-accent font-medium">
              {amount.toLocaleString('ru-RU')} ₽
            </span>
          </button>
        ))}
      </div>

      <div className="mb-6">
        <button
          className={`nominal-card w-full border border-gray-200 rounded-xl p-4 text-center ${
            customAmountOpen ? 'selected' : ''
          }`}
          onClick={onToggleCustomAmount}
        >
          <span className="text-sm text-gray-600">Другая сумма</span>
        </button>
        {customAmountOpen && (
          <div className="hidden mt-3" style={{ display: customAmountOpen ? 'block' : 'none' }}>
            <div className="relative">
              <input
                type="number"
                placeholder="Введите сумму"
                min="500"
                value={customAmount || ''}
                onChange={e => onCustomAmountChange(e.target.value)}
                className="w-full border border-gray-200 rounded-xl p-4 text-center text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">₽</span>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">Минимум 500 ₽</p>
          </div>
        )}
      </div>
    </div>
  );
};
