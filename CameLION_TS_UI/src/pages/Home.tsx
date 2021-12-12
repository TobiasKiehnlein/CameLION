import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.scss';
import React from 'react';
import { IconToggle } from '../components/IconToggle';
import { apps, list } from 'ionicons/icons';

const Toolbar = () =>
	<>
		<IonTitle>CameLION - Home</IonTitle>
		<IonButtons slot={ 'end' }>
			<IonButton>Open</IonButton>
			<IconToggle icons={ [ list, apps ] } onChange={ console.log }/>
		</IonButtons>
	</>;

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<Toolbar/>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle>CameLION - Home</IonTitle>
					
					</IonToolbar>
				</IonHeader>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
				<IonItem><IonLabel>Test</IonLabel></IonItem>
			</IonContent>
		</IonPage>
	);
};

export default Home;
