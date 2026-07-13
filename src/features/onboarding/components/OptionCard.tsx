import { IonIcon } from "@ionic/react";
import { checkmarkCircle } from "ionicons/icons";

type OptionCardProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

const OptionCard: React.FC<OptionCardProps> = ({
  label,
  selected,
  onSelect,
}) => {
  return (
    <button
      type="button"
      className={`onboarding-option-card${
        selected ? " onboarding-option-card--selected" : ""
      }`}
      aria-pressed={selected}
      onClick={onSelect}
    >
      <span>{label}</span>
      <IonIcon icon={checkmarkCircle} aria-hidden="true" />
    </button>
  );
};

export default OptionCard;
