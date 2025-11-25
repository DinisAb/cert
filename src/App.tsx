import { useState } from 'react';
import { Hero } from './components/Hero';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { useCertificate } from './hooks/useCertificate';
import './styles/index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    step,
    certificate,
    updateCertificate,
    nextStep,
    prevStep,
    reset
  } = useCertificate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white text-black">
      <Hero onOpenModal={handleOpenModal} />
      <FAQ />
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        certificate={certificate}
        onUpdateCertificate={updateCertificate}
        currentStep={step}
        onNextStep={nextStep}
        onPrevStep={prevStep}
        onReset={reset}
      />
    </div>
  );
}

export default App;
