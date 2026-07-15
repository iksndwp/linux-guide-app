import React from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonText } from '@ionic/react';
import './LibraryStats.css';

interface LibraryStatsProps {
  stats: {
    distros: number;
    families: number;
    beginnerFriendly: number;
  };
}

const LibraryStats: React.FC<LibraryStatsProps> = ({ stats }) => {
  return (
    <IonGrid className="library-stats-grid">
      <IonRow>
        <IonCol size="4">
          <IonCard className="stat-card">
            <IonCardContent>
              <IonText color="primary">
                <h2>{stats.distros}</h2>
              </IonText>
              <p>Distros</p>
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol size="4">
          <IonCard className="stat-card">
            <IonCardContent>
              <IonText color="secondary">
                <h2>{stats.families}</h2>
              </IonText>
              <p>Families</p>
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol size="4">
          <IonCard className="stat-card">
            <IonCardContent>
              <IonText color="tertiary">
                <h2>{stats.beginnerFriendly}</h2>
              </IonText>
              <p>Beginner</p>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default LibraryStats;
