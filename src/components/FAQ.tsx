import { useState } from 'react';
import { FAQ_ITEMS } from '../types';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-light mb-12 text-center">Частые вопросы</h2>

      <div className="space-y-0 border-t border-gray-200">
        {FAQ_ITEMS.map(item => (
          <div key={item.id} className={`accordion-item border-b border-gray-200 ${openId === item.id ? 'open' : ''}`}>
            <button
              className="w-full py-6 flex justify-between items-center text-left"
              onClick={() => toggleAccordion(item.id)}
            >
              <span className="text-sm md:text-base font-normal pr-4">
                {item.question}
              </span>
              <svg className="accordion-icon w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <div className={`accordion-content ${openId === item.id ? 'open' : ''}`}>
              <p className="text-sm text-gray-600 pb-6 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
