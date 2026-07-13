import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet, IonTabs } from "@ionic/react";

import FloatingNavbar from "./FloatingNavbar";
import Home from "../../features/home/Home";
import Library from "../../features/library/Library";

const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/app/home">
          <Home />
        </Route>

        <Route exact path="/app/library">
          <Library />
        </Route>

        <Route exact path="/app">
          <Redirect to="/app/home" />
        </Route>
      </IonRouterOutlet>

      <FloatingNavbar />
    </IonTabs>
  );
};

export default MainTabs;
