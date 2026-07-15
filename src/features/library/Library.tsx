import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import LibraryStats from "./components/LibraryStats";
import FamilyAccordion from "./components/FamilyAccordion";
import { mockFamilies, libraryStats } from "./data/mockData";
import "./Library.css";

const Library: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Distro Library</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding library-content">
        <div className="library-header">
          <p className="library-subtitle">
            Jelajahi keluarga distro Linux dan pilih distro yang ingin kamu
            pelajari.
          </p>
        </div>

        <LibraryStats stats={libraryStats} />
        <FamilyAccordion families={mockFamilies} />
      </IonContent>
    </IonPage>
  );
};

export default Library;
