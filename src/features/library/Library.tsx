import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Library.css";

const Library: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Library</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h1>Linux Distro Library</h1>
        <p>
          Jelajahi keluarga distro Linux dan pilih distro yang ingin kamu
          pelajari.
        </p>

        <IonAccordionGroup>
          <IonAccordion value="debian">
            <IonItem slot="header">
              <IonLabel>Debian-based</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem button>
                <IonLabel>Debian</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Ubuntu</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Linux Mint</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>

          <IonAccordion value="redhat">
            <IonItem slot="header">
              <IonLabel>Red Hat-based</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem button>
                <IonLabel>Fedora</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Rocky Linux</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>AlmaLinux</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>

          <IonAccordion value="arch">
            <IonItem slot="header">
              <IonLabel>Arch-based</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem button>
                <IonLabel>Arch Linux</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>EndeavourOS</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Manjaro</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Library;
