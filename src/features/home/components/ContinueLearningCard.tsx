import React from 'react';

import type { LearningProgress } from '../types';

interface ContinueLearningCardProps {
  progress: LearningProgress;
}

/**
 * ContinueLearningCard — shows in-progress distro learning state.
 *
 * This component is intentionally never rendered when `hasLearningProgress`
 * is false — the conditional mount lives in Home.tsx, not here.
 *
 * Future:
 *  - Add a "Resume" button that navigates to the last viewed lesson.
 *  - Accept an `onResume` callback prop.
 *  - Load `progress` from a SQLite query keyed to the active distro.
 */
const ContinueLearningCard: React.FC<ContinueLearningCardProps> = ({
  progress,
}) => {
  const { currentStep, distroName, totalSteps } = progress;
  const percent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="continue-learning-card">
      <p className="continue-learning-card__eyebrow">Continue Learning</p>
      <p className="continue-learning-card__name">{distroName}</p>
      <p className="continue-learning-card__step">
        Step {currentStep} of {totalSteps}
      </p>
      <div className="continue-learning-card__progress-row">
        <div
          className="continue-learning-card__bar-track"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${percent}% complete`}
        >
          <div
            className="continue-learning-card__bar-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="continue-learning-card__percent">{percent}%</span>
      </div>
    </div>
  );
};

export default ContinueLearningCard;
