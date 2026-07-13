type QuestionHeaderProps = {
  title: string;
  subtitle: string;
};

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="onboarding-question">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default QuestionHeader;
