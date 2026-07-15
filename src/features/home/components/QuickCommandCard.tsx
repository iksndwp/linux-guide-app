import { IonIcon } from '@ionic/react';
import { checkmarkOutline, copyOutline } from 'ionicons/icons';
import React, { useState } from 'react';

import type { QuickCommand } from '../types';

interface QuickCommandCardProps {
  command: QuickCommand;
}

/**
 * QuickCommandCard — displays one Linux command with a copy button.
 *
 * Uses the Web Clipboard API (navigator.clipboard). Falls back silently on
 * devices or browser contexts that deny clipboard access.
 *
 * The "copied" state reverts after 2 seconds for a polished micro-interaction.
 *
 * Future: support Capacitor Clipboard plugin for reliable Android/iOS access.
 */
const QuickCommandCard: React.FC<QuickCommandCardProps> = ({ command }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently
    }
  };

  return (
    <div className="quick-command-card">
      <div className="quick-command-card__text">
        <p className="quick-command-card__command">{command.command}</p>
        <p className="quick-command-card__description">{command.description}</p>
      </div>

      <button
        aria-label={copied ? 'Copied!' : `Copy command: ${command.command}`}
        className={`quick-command-card__copy-btn${copied ? ' quick-command-card__copy-btn--copied' : ''}`}
        onClick={handleCopy}
        type="button"
      >
        <IonIcon
          aria-hidden="true"
          icon={copied ? checkmarkOutline : copyOutline}
        />
      </button>
    </div>
  );
};

export default QuickCommandCard;
