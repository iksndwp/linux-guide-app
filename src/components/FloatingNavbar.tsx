import { IonIcon } from "@ionic/react";
import { bookOutline, homeOutline, searchOutline } from "ionicons/icons";
import { useHistory, useLocation } from "react-router-dom";

import "./FloatingNavbar.css";

type NavItem = {
  label: string;
  path: string;
  icon: string;
};

const navItems: NavItem[] = [
  {
    label: "Beranda",
    path: "/home",
    icon: homeOutline,
  },
  {
    label: "Library",
    path: "/library",
    icon: bookOutline,
  },
];

const FloatingNavbar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const navigateTo = (path: string) => {
    if (location.pathname !== path) {
      history.push(path);
    }
  };

  const handleSearch = () => {
    console.log("Search belum dibuat");
  };

  return (
    <nav className="floating-navbar" aria-label="Navigasi utama">
      <div className="floating-navbar__pill">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <button
              aria-current={isActive ? "page" : undefined}
              aria-label={item.label}
              className={`floating-navbar__item${
                isActive ? " floating-navbar__item--active" : ""
              }`}
              key={item.path}
              onClick={() => navigateTo(item.path)}
              type="button"
            >
              <IonIcon aria-hidden="true" icon={item.icon} />
              {isActive && (
                <span className="floating-navbar__label">{item.label}</span>
              )}
            </button>
          );
        })}
      </div>

      <button
        aria-label="Search"
        className="floating-navbar__search"
        onClick={handleSearch}
        type="button"
      >
        <IonIcon aria-hidden="true" icon={searchOutline} />
      </button>
    </nav>
  );
};

export default FloatingNavbar;
