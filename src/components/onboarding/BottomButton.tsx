import { IonButton } from "@ionic/react";

type BottomButtonProps = {
  disabled: boolean;
  label: string;
  onClick: () => void;
};

const BottomButton: React.FC<BottomButtonProps> = ({
  disabled,
  label,
  onClick,
}) => {
  return (
    <footer className="onboarding-bottom">
      <IonButton
        className="onboarding-bottom__button"
        disabled={disabled}
        expand="block"
        onClick={onClick}
      >
        {label}
      </IonButton>
    </footer>
  );
};

export default BottomButton;
