import React from 'react';
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
    <div className="library-stats-grid">
      <div className="stat-card">
        <p className="stat-card__label">Distros</p>
        <p className="stat-card__value">{stats.distros}</p>
      </div>
      <div className="stat-card">
        <p className="stat-card__label">Families</p>
        <p className="stat-card__value">{stats.families}</p>
      </div>
      <div className="stat-card">
        <p className="stat-card__label">Beginner</p>
        <p className="stat-card__value">{stats.beginnerFriendly}</p>
      </div>
    </div>
  );
};

export default LibraryStats;
