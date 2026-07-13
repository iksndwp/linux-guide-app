type ChoiceChipProps = {
  label: string;
  selected: boolean;
  onToggle: () => void;
};

const ChoiceChip: React.FC<ChoiceChipProps> = ({
  label,
  selected,
  onToggle,
}) => {
  return (
    <button
      type="button"
      className={`onboarding-choice-chip${
        selected ? " onboarding-choice-chip--selected" : ""
      }`}
      aria-pressed={selected}
      onClick={onToggle}
    >
      {label}
    </button>
  );
};

export default ChoiceChip;
