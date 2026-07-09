import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Tab1 from "./pages/Tab1";
import Library from "./pages/Library";
import FloatingNavbar from "./components/FloatingNavbar";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Tab1 />
        </Route>

        <Route exact path="/library">
          <Library />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>

      <FloatingNavbar />
    </IonReactRouter>
  </IonApp>
);

export default App;
