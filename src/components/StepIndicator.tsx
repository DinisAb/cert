import '../styles/modal.css';

interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const getIndicatorClass = (step: number) => {
    if (step < currentStep) return 'completed';
    if (step === currentStep) return 'active';
    return '';
  };

  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3].map((step, idx) => (
        <div key={step}>
          <div
            className={`step-indicator w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs ${getIndicatorClass(
              step
            )}`}
          >
            {step}
          </div>
          {idx < 2 && <div className="w-6 h-px bg-gray-200 mx-1 inline-block"></div>}
        </div>
      ))}
    </div>
  );
};
