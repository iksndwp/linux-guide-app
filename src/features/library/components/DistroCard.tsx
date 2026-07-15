import React from 'react';
import { IonItem, IonLabel, IonBadge, IonIcon } from '@ionic/react';
import { chevronForwardOutline, logoTux } from 'ionicons/icons';
import { Distro } from '../data/mockData';
import './DistroCard.css';

interface DistroCardProps {
  distro: Distro;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'success';
    case 'Intermediate': return 'warning';
    case 'Advanced': return 'danger';
    default: return 'medium';
  }
};

const DistroCard: React.FC<DistroCardProps> = ({ distro }) => {
  return (
    <IonItem button detail={false} className="distro-card-item" lines="none">
      <div className="distro-logo">
        <IonIcon icon={logoTux} />
      </div>
      <IonLabel className="distro-info">
        <h3>{distro.name}</h3>
        <p>Package Manager: {distro.packageManager}</p>
      </IonLabel>
      <div className="distro-meta">
        <IonBadge color={getDifficultyColor(distro.difficulty)}>{distro.difficulty}</IonBadge>
        <IonIcon icon={chevronForwardOutline} color="medium" />
      </div>
    </IonItem>
  );
};

export default DistroCard;
