import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { terminalOutline } from "ionicons/icons";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Splash.css";

const SPLASH_NAVIGATION_DELAY_MS = 1200;

const Splash: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const navigationTimer = window.setTimeout(() => {
      history.replace("/onboarding");
    }, SPLASH_NAVIGATION_DELAY_MS);

    return () => {
      window.clearTimeout(navigationTimer);
    };
  }, [history]);

  return (
    <IonPage>
      <IonContent fullscreen className="splash-screen">
        <div className="splash-screen__decor splash-screen__decor--top" />
        <div className="splash-screen__decor splash-screen__decor--bottom" />

        <main className="splash-screen__content" aria-label="Linux Guide">
          <div className="splash-screen__icon-wrap" aria-hidden="true">
            <IonIcon className="splash-screen__icon" icon={terminalOutline} />
          </div>

          <h1 className="splash-screen__title">Linux Guide</h1>
          <div className="splash-screen__divider" aria-hidden="true" />
          <p className="splash-screen__subtitle">
            Your Offline Linux Learning Companion
          </p>
        </main>

        <div className="splash-screen__indicator" aria-hidden="true">
          <span className="splash-screen__dot splash-screen__dot--active" />
          <span className="splash-screen__dot" />
          <span className="splash-screen__dot" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splash;
