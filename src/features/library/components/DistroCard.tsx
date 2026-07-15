import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import { Distro } from '../data/mockData';
import './DistroCard.css';

interface DistroCardProps {
  distro: Distro;
}

const getDifficultyClass = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'difficulty-badge--beginner';
    case 'Intermediate': return 'difficulty-badge--intermediate';
    case 'Advanced': return 'difficulty-badge--advanced';
    default: return '';
  }
};

const DistroCard: React.FC<DistroCardProps> = ({ distro }) => {
  return (
    <div className="distro-card">
      <div className="distro-card__logo">
        Tux
      </div>
      <div className="distro-card__info">
        <h3 className="distro-card__name">{distro.name}</h3>
        <p className="distro-card__pm">Package: {distro.packageManager}</p>
      </div>
      <div className="distro-card__right">
        <span className={`difficulty-badge ${getDifficultyClass(distro.difficulty)}`}>
          {distro.difficulty}
        </span>
        <IonIcon icon={chevronForwardOutline} className="distro-card__chevron" />
      </div>
    </div>
  );
};

export default DistroCard;
