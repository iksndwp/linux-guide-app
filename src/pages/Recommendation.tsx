import { IonButton, IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";

import RecommendationCard from "../components/recommendation/RecommendationCard";

import "./Recommendation.css";

const mockRecommendations = [
  {
    accent: "#3b82f6",
    description:
      "A polished, modern desktop with fresh software and strong community support.",
    difficulty: "Beginner Friendly",
    initials: "F",
    name: "Fedora",
    reason:
      "Good fit if you want a clean Linux experience with up-to-date tools for learning and development.",
  },
  {
    accent: "#86c232",
    description:
      "A familiar desktop experience that focuses on comfort, stability, and everyday use.",
    difficulty: "Easy",
    initials: "LM",
    name: "Linux Mint",
    reason:
      "Matches users who prefer a gentle first step into Linux with minimal setup and clear defaults.",
  },
  {
    accent: "#e95420",
    description:
      "A popular all-rounder with broad tutorials, hardware support, and a large ecosystem.",
    difficulty: "Beginner",
    initials: "U",
    name: "Ubuntu",
    reason:
      "Useful when you want the easiest path to guides, troubleshooting help, and beginner learning material.",
  },
];

const Recommendation: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen className="recommendation-screen">
        <main className="recommendation-screen__content">
          <header className="recommendation-screen__hero">
            <p className="recommendation-screen__eyebrow">Your next step</p>
            <h1>Recommended For You</h1>
            <p>
              Based on your answers, these Linux distributions are the best
              starting point.
            </p>
          </header>

          <section
            aria-label="Recommended Linux distributions"
            className="recommendation-screen__cards"
          >
            {mockRecommendations.map((recommendation) => (
              <RecommendationCard
                key={recommendation.name}
                accent={recommendation.accent}
                description={recommendation.description}
                difficulty={recommendation.difficulty}
                initials={recommendation.initials}
                name={recommendation.name}
                reason={recommendation.reason}
              />
            ))}
          </section>

          <footer className="recommendation-screen__actions">
            <IonButton
              className="recommendation-screen__primary"
              expand="block"
              onClick={() => history.push("/app/home")}
            >
              Start Learning
            </IonButton>

            <IonButton
              className="recommendation-screen__secondary"
              expand="block"
              fill="clear"
              onClick={() => history.push("/app/library")}
            >
              Browse Library
            </IonButton>
          </footer>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Recommendation;
