import { IonContent, IonPage } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';
import React from 'react';

import {
  commands,
  dailyTip,
  hasLearningProgress,
  learningProgress,
  preferences,
  recommendations,
} from './mockData';

import ContinueLearningCard from './components/ContinueLearningCard';
import DailyTipCard from './components/DailyTipCard';
import Greeting from './components/Greeting';
import PreferenceCard from './components/PreferenceCard';
import QuickCommandCard from './components/QuickCommandCard';
import RecommendationCard from './components/RecommendationCard';

import './Home.css';

/**
 * Home — the dashboard landing screen after onboarding.
 *
 * Architecture
 * ────────────
 * This component is intentionally a thin orchestrator. It owns:
 *   1. The Ionic page/content shell
 *   2. Section ordering and conditional rendering logic
 *   3. Data wiring from mockData → child components
 *
 * It does NOT own layout details, card styles, or copy logic — those live
 * inside the individual components.
 *
 * Future integration points (each labelled with a comment below):
 *  - Preferences  → Capacitor Preferences / Onboarding context
 *  - Recommendations → Recommendation Engine (SQLite)
 *  - Commands     → static or curated per skill level
 *  - Daily Tip    → random query from SQLite tips table
 *  - Learning progress → SQLite progress table
 */
const Home: React.FC = () => {
  const handleSettingsPress = () => {
    // TODO Sprint N: navigate to Settings page once implemented
    console.log('Settings — not yet implemented');
  };

  return (
    <IonPage className="home-page">
      <IonContent className="home-content">
        <div className="home-scroll">

          {/* ── 1. Header: Greeting + Settings ───────────────────── */}
          <header className="home-header">
            <Greeting />

            <button
              aria-label="Open settings"
              className="home-settings-btn"
              id="home-settings-btn"
              onClick={handleSettingsPress}
              type="button"
            >
              <IonIcon aria-hidden="true" icon={settingsOutline} />
            </button>
          </header>

          {/* ── 2. Your Preferences ──────────────────────────────── */}
          {/* Future: load from Capacitor Preferences written by Onboarding */}
          <section className="home-section" aria-labelledby="home-prefs-title">
            <h2 className="home-section__title" id="home-prefs-title">
              Your Preferences
            </h2>
            <div className="home-preferences-grid">
              {preferences.map((pref) => (
                <PreferenceCard key={pref.label} preference={pref} />
              ))}
            </div>
          </section>

          {/* ── 3. Continue Learning (conditional) ───────────────── */}
          {/* Future: derive hasLearningProgress from SQLite progress table */}
          {hasLearningProgress && (
            <section
              className="home-section"
              aria-labelledby="home-continue-title"
            >
              <h2
                className="home-section__title"
                id="home-continue-title"
              >
                Continue Learning
              </h2>
              <ContinueLearningCard progress={learningProgress} />
            </section>
          )}

          {/* ── 4. Recommended For You ───────────────────────────── */}
          {/* Future: replace recommendations[] with Recommendation Engine output */}
          <section className="home-section" aria-labelledby="home-recs-title">
            <h2 className="home-section__title" id="home-recs-title">
              Recommended For You
            </h2>
            <div className="recommendation-list">
              {recommendations.slice(0, 3).map((rec) => (
                <RecommendationCard key={rec.id} recommendation={rec} />
              ))}
            </div>
          </section>

          {/* ── 5. Quick Commands ────────────────────────────────── */}
          {/* Future: filter by user skill level stored in preferences */}
          <section
            className="home-section"
            aria-labelledby="home-commands-title"
          >
            <h2 className="home-section__title" id="home-commands-title">
              Quick Commands
            </h2>
            <div className="quick-commands-list">
              {commands.map((cmd) => (
                <QuickCommandCard key={cmd.id} command={cmd} />
              ))}
            </div>
          </section>

          {/* ── 6. Daily Tip ─────────────────────────────────────── */}
          {/* Future: replace dailyTip.text with a random row from SQLite */}
          <section className="home-section" aria-labelledby="home-tip-title">
            <h2 className="home-section__title" id="home-tip-title">
              Daily Tip
            </h2>
            <DailyTipCard tip={dailyTip.text} />
          </section>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
