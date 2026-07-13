import { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

import BottomButton from "./components/BottomButton";
import ChoiceChip from "./components/ChoiceChip";
import OptionCard from "./components/OptionCard";
import ProgressBar from "./components/ProgressBar";
import QuestionHeader from "./components/QuestionHeader";

import "./Onboarding.css";

type Step = 1 | 2 | 3 | 4;

type SingleAnswerKey = "experience" | "terminal" | "priority";

type Answers = {
  experience: string;
  purposes: string[];
  terminal: string;
  priority: string;
};

const TOTAL_STEPS = 4;

const stepContent = {
  1: {
    title: "How experienced are you with Linux?",
    subtitle: "Be honest - this helps us tailor your recommendations.",
    answerKey: "experience",
    options: ["Never used Linux", "Beginner", "Intermediate", "Advanced"],
  },
  3: {
    title: "How comfortable are you with Terminal?",
    subtitle: "The command line is a powerful Linux tool.",
    answerKey: "terminal",
    options: ["Never used", "Basic commands", "Comfortable", "Expert"],
  },
  4: {
    title: "What is your priority?",
    subtitle: "This shapes which distro family we recommend.",
    answerKey: "priority",
    options: ["Easy to use", "Stable", "Latest packages", "Customization"],
  },
} as const;

const purposeOptions = [
  "Programming",
  "Daily Use",
  "Gaming",
  "Cyber Security",
  "Server",
  "Old Laptop",
];

const Onboarding: React.FC = () => {
  const history = useHistory();
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState<Answers>({
    experience: "",
    purposes: [],
    terminal: "",
    priority: "",
  });

  const isCurrentStepValid = useMemo(() => {
    if (step === 1) {
      return Boolean(answers.experience);
    }

    if (step === 2) {
      return answers.purposes.length > 0;
    }

    if (step === 3) {
      return Boolean(answers.terminal);
    }

    return Boolean(answers.priority);
  }, [answers, step]);

  const selectSingleAnswer = (answerKey: SingleAnswerKey, value: string) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [answerKey]: value,
    }));
  };

  const togglePurpose = (purpose: string) => {
    setAnswers((currentAnswers) => {
      const isSelected = currentAnswers.purposes.includes(purpose);

      return {
        ...currentAnswers,
        purposes: isSelected
          ? currentAnswers.purposes.filter((item) => item !== purpose)
          : [...currentAnswers.purposes, purpose],
      };
    });
  };

  const goBack = () => {
    if (step === 1) {
      history.push("/");
      return;
    }

    setStep((currentStep) => (currentStep - 1) as Step);
  };

  const goForward = () => {
    if (!isCurrentStepValid) {
      return;
    }

    if (step === 4) {
      history.push("/recommendation");
      return;
    }

    setStep((currentStep) => (currentStep + 1) as Step);
  };

  const renderStep = () => {
    if (step === 2) {
      return (
        <>
          <QuestionHeader
            title="What do you want to use Linux for?"
            subtitle="Select all that apply."
          />

          <div className="onboarding-chip-grid" role="group">
            {purposeOptions.map((purpose) => (
              <ChoiceChip
                key={purpose}
                label={purpose}
                selected={answers.purposes.includes(purpose)}
                onToggle={() => togglePurpose(purpose)}
              />
            ))}
          </div>
        </>
      );
    }

    const content = stepContent[step];

    return (
      <>
        <QuestionHeader title={content.title} subtitle={content.subtitle} />

        <div className="onboarding-option-list" role="group">
          {content.options.map((option) => (
            <OptionCard
              key={option}
              label={option}
              selected={answers[content.answerKey] === option}
              onSelect={() => selectSingleAnswer(content.answerKey, option)}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <IonPage>
      <IonContent fullscreen className="onboarding-screen">
        <main className="onboarding-screen__content">
          <div className="onboarding-screen__topbar">
            {step > 1 ? (
              <IonButton
                aria-label="Go back"
                className="onboarding-screen__back"
                fill="clear"
                onClick={goBack}
              >
                <IonIcon icon={arrowBackOutline} slot="icon-only" />
              </IonButton>
            ) : (
              <span aria-hidden="true" />
            )}
          </div>

          <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />

          <section className="onboarding-screen__question">{renderStep()}</section>

          <BottomButton
            disabled={!isCurrentStepValid}
            label={step === 4 ? "Get My Recommendations" : "Continue"}
            onClick={goForward}
          />
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
