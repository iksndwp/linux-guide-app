import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet, IonTabs } from "@ionic/react";

import FloatingNavbar from "./FloatingNavbar";
import Library from "../pages/Library";
import Tab1 from "../pages/Tab1";

const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/app/home">
          <Tab1 />
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
