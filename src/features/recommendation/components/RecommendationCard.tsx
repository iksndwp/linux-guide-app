type RecommendationCardProps = {
  accent: string;
  description: string;
  difficulty: string;
  initials: string;
  name: string;
  reason: string;
};

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  accent,
  description,
  difficulty,
  initials,
  name,
  reason,
}) => {
  return (
    <article className="recommendation-card">
      <div className="recommendation-card__header">
        <div
          aria-hidden="true"
          className="recommendation-card__logo"
          style={{ "--distro-accent": accent } as React.CSSProperties}
        >
          {initials}
        </div>

        <div className="recommendation-card__title">
          <h2>{name}</h2>
          <span className="recommendation-card__badge">{difficulty}</span>
        </div>
      </div>

      <p className="recommendation-card__description">{description}</p>

      <div className="recommendation-card__match">
        <span>Why it matches</span>
        <p>{reason}</p>
      </div>
    </article>
  );
};

export default RecommendationCard;
