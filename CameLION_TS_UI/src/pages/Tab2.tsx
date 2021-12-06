import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import * as wasm from '@rustWebGl';
import './Tab2.scss';

const Tab2: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 2</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Tab 2</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonButton onClick={ wasm.greet }/>
			
			</IonContent>
		</IonPage>
	);
};

export default Tab2;
