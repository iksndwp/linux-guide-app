import React from 'react';
import { IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList } from '@ionic/react';
import DistroCard from './DistroCard';
import { Family } from '../data/mockData';
import './FamilyAccordion.css';

interface FamilyAccordionProps {
  families: Family[];
}

const FamilyAccordion: React.FC<FamilyAccordionProps> = ({ families }) => {
  return (
    <IonAccordionGroup value={['debian']} multiple={true} className="family-accordion-group">
      {families.map((family) => (
        <IonAccordion value={family.id} key={family.id} className="family-accordion">
          <IonItem slot="header" color="light" lines="none" className="family-header">
            <IonLabel className="family-title">{family.name}</IonLabel>
          </IonItem>
          <div className="ion-padding-bottom" slot="content">
            <IonList className="distro-list" lines="none">
              {family.distros.map(distro => (
                <DistroCard key={distro.id} distro={distro} />
              ))}
            </IonList>
          </div>
        </IonAccordion>
      ))}
    </IonAccordionGroup>
  );
};

export default FamilyAccordion;
