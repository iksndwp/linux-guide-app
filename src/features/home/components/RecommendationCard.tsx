import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import React from 'react';

import type { Difficulty, Recommendation } from '../types';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

/** Maps difficulty level to the appropriate CSS modifier class. */
function getDifficultyClass(difficulty: Difficulty): string {
  const map: Record<Difficulty, string> = {
    Beginner: 'difficulty-badge--beginner',
    Intermediate: 'difficulty-badge--intermediate',
    Advanced: 'difficulty-badge--advanced',
  };
  return map[difficulty];
}

/**
 * RecommendationCard — displays one distro in the "Recommended For You" list.
 *
 * Logo is a 38px rounded square with the distro colour and a short initial —
 * a placeholder until real distro SVG assets are added.
 * Replace `logoInitial` + `logoColor` with an `<img>` once assets exist.
 *
 * Future: add an `onPress` callback that navigates to the distro detail page.
 */
const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation,
}) => {
  const { difficulty, family, logoColor, logoInitial, name } = recommendation;

  return (
    <div
      aria-label={`${name} — ${family}`}
      className="recommendation-card"
      role="button"
      tabIndex={0}
    >
      {/* Distro logo placeholder — 38 px rounded square */}
      <div
        className="recommendation-card__logo"
        style={{ backgroundColor: logoColor }}
        aria-hidden="true"
      >
        {logoInitial}
      </div>

      {/* Name (bold) above family (muted) */}
      <div className="recommendation-card__info">
        <p className="recommendation-card__name">{name}</p>
        <p className="recommendation-card__family">{family}</p>
      </div>

      {/* Difficulty badge + chevron — pushed to far right via margin-left: auto */}
      <div className="recommendation-card__right">
        <span className={`difficulty-badge ${getDifficultyClass(difficulty)}`}>
          {difficulty}
        </span>
        <IonIcon
          aria-hidden="true"
          className="recommendation-card__chevron"
          icon={chevronForwardOutline}
        />
      </div>
    </div>
  );
};

export default RecommendationCard;
