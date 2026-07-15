import React from 'react';
import {
  IonContent,
  IonPage,
} from "@ionic/react";

import LibraryStats from "./components/LibraryStats";
import FamilyAccordion from "./components/FamilyAccordion";
import { mockFamilies, libraryStats } from "./data/mockData";
import "./Library.css";

const Library: React.FC = () => {
  return (
    <IonPage className="library-page">
      <IonContent className="library-content">
        <div className="library-scroll">
          
          <header className="library-header">
            <h1 className="library-greeting__title">Distro Library</h1>
            <p className="library-greeting__eyebrow">
              Jelajahi keluarga distro Linux
            </p>
          </header>

          <section className="library-section">
            <h2 className="library-section__title">Statistics</h2>
            <LibraryStats stats={libraryStats} />
          </section>

          <section className="library-section">
            <h2 className="library-section__title">Families</h2>
            <FamilyAccordion families={mockFamilies} />
          </section>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Library;
