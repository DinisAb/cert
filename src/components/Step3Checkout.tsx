interface Step3CheckoutProps {
  nominal: number | null;
  recipientEmail: string;
  onEmailChange: (value: string) => void;
  recipientPhone: string;
  onPhoneChange: (value: string) => void;
  senderName: string;
  onNameChange: (value: string) => void;
  message: string;
  onMessageChange: (value: string) => void;
}

export const Step3Checkout: React.FC<Step3CheckoutProps> = ({
  nominal,
  recipientEmail,
  onEmailChange,
  recipientPhone,
  onPhoneChange,
  senderName,
  onNameChange,
  message,
  onMessageChange
}) => {
  return (
    <div>
      <h3 className="text-xl font-light mb-2">Оформление</h3>
      <p className="text-sm text-gray-500 mb-6">Данные получателя сертификата</p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Email получателя</label>
          <input
            type="email"
            placeholder="email@example.com"
            value={recipientEmail}
            onChange={e => onEmailChange(e.target.value)}
            className="w-full border border-gray-200 rounded-xl p-4 text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Или номер телефона</label>
          <input
            type="tel"
            placeholder="+7 (999) 999-99-99"
            value={recipientPhone}
            onChange={e => onPhoneChange(e.target.value)}
            className="w-full border border-gray-200 rounded-xl p-4 text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Ваше имя</label>
          <input
            type="text"
            placeholder="Как вас зовут?"
            value={senderName}
            onChange={e => onNameChange(e.target.value)}
            className="w-full border border-gray-200 rounded-xl p-4 text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Пожелание (необязательно)</label>
          <textarea
            placeholder="Напишите тёплые слова..."
            rows={3}
            value={message}
            onChange={e => onMessageChange(e.target.value)}
            className="w-full border border-gray-200 rounded-xl p-4 text-sm resize-none"
          />
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Сертификат</span>
          <span className="text-lg font-medium" style={{ color: '#D4AF37' }}>
            {nominal ? nominal.toLocaleString('ru-RU') + ' ₽' : '—'}
          </span>
        </div>
      </div>
    </div>
  );
};
