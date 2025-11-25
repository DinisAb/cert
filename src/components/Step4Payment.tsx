import { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface Step4PaymentProps {
  nominal: number | null;
  background: string | null;
  caption: string | null;
  senderName: string;
  recipientEmail: string;
}

export const Step4Payment: React.FC<Step4PaymentProps> = ({
  nominal,
  background,
  caption,
  senderName,
  recipientEmail
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const generatePDF = async () => {
    setIsProcessing(true);

    try {
      // Создаём временный элемент для рендеринга сертификата
      const certificateDiv = document.createElement('div');
      certificateDiv.style.width = '1200px';
      certificateDiv.style.height = '800px';
      certificateDiv.style.position = 'absolute';
      certificateDiv.style.left = '-9999px';
      certificateDiv.style.backgroundColor = '#fff';
      certificateDiv.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-image: url('${background}'); background-size: cover; background-position: center; position: relative;">
          <div style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <p style="font-size: 14px; letter-spacing: 0.2em; color: rgba(255, 255, 255, 0.8); margin: 0 0 10px 0;">UVI JEWELRY</p>
            ${caption ? `<p style="font-size: 24px; color: white; margin: 0 0 20px 0;">${caption}</p>` : ''}
            <p style="font-size: 64px; color: white; font-weight: 300; margin: 0;">${nominal?.toLocaleString('ru-RU')} ₽</p>
            <p style="font-size: 14px; color: rgba(255, 255, 255, 0.7); margin: 20px 0 0 0;">Подарочный сертификат</p>
            <p style="font-size: 12px; color: rgba(255, 255, 255, 0.6); margin: 40px 0 0 0;">От: ${senderName}</p>
          </div>
        </div>
      `;
      document.body.appendChild(certificateDiv);

      // Конвертируем в canvas
      const canvas = await html2canvas(certificateDiv, {
        backgroundColor: '#ffffff',
        scale: 2
      });

      // Удаляем временный элемент
      document.body.removeChild(certificateDiv);

      // Создаём PDF
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      // Создаём URL для скачивания
      const url = pdf.output('bloburi') as unknown as string;
      setPdfUrl(url);
      setIsComplete(true);
    } catch (error) {
      console.error('Ошибка при создании PDF:', error);
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    // Автоматически генерируем PDF при загрузке компонента
    const timer = setTimeout(() => {
      generatePDF();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `certificate_${Date.now()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="text-center">
      <h3 className="text-xl font-light mb-2">Обработка платежа</h3>
      <p className="text-sm text-gray-500 mb-12">Подтверждение оплаты сертификата</p>

      {isProcessing && !isComplete && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-[#C4785A] rounded-full animate-spin mb-6"></div>
          <p className="text-gray-600 mb-2">Проверяем оплату...</p>
          <p className="text-xs text-gray-400">Пожалуйста, подождите</p>
        </div>
      )}

      {isComplete && pdfUrl && (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-green-900 mb-2">Платёж успешен!</h4>
            <p className="text-sm text-green-700 mb-4">
              Сертификат на сумму <span className="font-medium">{nominal?.toLocaleString('ru-RU')} ₽</span> создан
            </p>
            <p className="text-xs text-green-600">
              Отправлено на: {recipientEmail || 'указанный номер'}
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-900 mb-4">
              Ваш сертификат готов! Скачайте PDF для распечатки или отправки
            </p>
            <button
              onClick={handleDownload}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
              </svg>
              Скачать PDF сертификат
            </button>
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <p>✓ Сертификат отправлен на почту</p>
            <p>✓ Сохранён в личном кабинете</p>
            <p>✓ Действителен в течение 3 лет</p>
          </div>
        </div>
      )}
    </div>
  );
};
