import React from 'react';

import type { Preference } from '../types';

interface PreferenceCardProps {
  preference: Preference;
}

/**
 * PreferenceCard — one cell in the 2×2 "Your Preferences" grid.
 *
 * Future: add an `onEdit` callback to allow users to tap and edit a preference.
 * Props would then pass the onboarding field key so the edit navigates to the
 * correct onboarding step.
 */
const PreferenceCard: React.FC<PreferenceCardProps> = ({ preference }) => {
  return (
    <div className="preference-card">
      <p className="preference-card__label">{preference.label}</p>
      <p className="preference-card__value">{preference.value}</p>
    </div>
  );
};

export default PreferenceCard;
