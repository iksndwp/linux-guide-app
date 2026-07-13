type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="onboarding-progress" aria-label={`Step ${currentStep} of ${totalSteps}`}>
      <div className="onboarding-progress__label">
        Step {currentStep} of {totalSteps}
      </div>
      <div className="onboarding-progress__track" aria-hidden="true">
        <div
          className="onboarding-progress__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
