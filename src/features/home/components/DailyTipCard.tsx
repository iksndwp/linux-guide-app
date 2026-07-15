import { IonIcon } from '@ionic/react';
import { bulbOutline } from 'ionicons/icons';
import React from 'react';

interface DailyTipCardProps {
  tip: string;
}

/**
 * DailyTipCard — displays a single Linux tip of the day.
 *
 * Future: accept an optional `category` prop (e.g. "Filesystem", "Networking")
 * and render a matching icon. The tip itself will be randomly selected from
 * a SQLite tips table once that table is seeded.
 */
const DailyTipCard: React.FC<DailyTipCardProps> = ({ tip }) => {
  return (
    <div className="daily-tip-card">
      <div className="daily-tip-card__icon-wrap">
        <IonIcon aria-hidden="true" icon={bulbOutline} />
      </div>
      <div className="daily-tip-card__body">
        <p className="daily-tip-card__eyebrow">Daily Tip</p>
        <p className="daily-tip-card__text">{tip}</p>
      </div>
    </div>
  );
};

export default DailyTipCard;
