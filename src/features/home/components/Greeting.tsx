import React from 'react';

/** Returns the correct greeting phrase for the current hour. */
function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good Morning 👋';
  if (hour >= 12 && hour < 17) return 'Good Afternoon 👋';
  return 'Good Evening 👋';
}

/**
 * Greeting — displays a time-aware greeting and a fixed subtitle.
 *
 * Purely presentational, no props. Reads the system clock on every render.
 * Future: accept a `userName` prop to personalise the subtitle.
 */
const Greeting: React.FC = () => {
  return (
    <div className="home-greeting">
      <p className="home-greeting__eyebrow">{getGreeting()}</p>
      <h1 className="home-greeting__title">Welcome Back</h1>
    </div>
  );
};

export default Greeting;
