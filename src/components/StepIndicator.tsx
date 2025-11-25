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
      <div
        className={`step-indicator w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs ${getIndicatorClass(
          1
        )}`}
      >
        1
      </div>
      <div className="w-6 h-px bg-gray-200"></div>
      <div
        className={`step-indicator w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs ${getIndicatorClass(
          2
        )}`}
      >
        2
      </div>
      <div className="w-6 h-px bg-gray-200"></div>
      <div
        className={`step-indicator w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs ${getIndicatorClass(
          3
        )}`}
      >
        3
      </div>
    </div>
  );
};
