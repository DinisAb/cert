import { useState } from 'react';
import { Certificate, Step } from '../types';

export const useCertificate = () => {
  const [step, setStep] = useState<Step>(1);
  const [certificate, setCertificate] = useState<Certificate>({
    nominal: null,
    background: null,
    caption: null,
    recipientEmail: '',
    recipientPhone: '',
    senderName: '',
    message: ''
  });

  const updateCertificate = (updates: Partial<Certificate>) => {
    setCertificate(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (step < 3) {
      setStep((step + 1) as Step);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((step - 1) as Step);
    }
  };

  const reset = () => {
    setStep(1);
    setCertificate({
      nominal: null,
      background: null,
      caption: null,
      recipientEmail: '',
      recipientPhone: '',
      senderName: '',
      message: ''
    });
  };

  return {
    step,
    setStep,
    certificate,
    updateCertificate,
    nextStep,
    prevStep,
    reset
  };
};
