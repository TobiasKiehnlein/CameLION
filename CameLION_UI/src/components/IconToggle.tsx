import { FC, useState } from 'react';
import { IonButton, IonIcon } from '@ionic/react';

interface Props {
	icons: string[],
	onChange: (icon: string) => any,
	defaultValue?: string
}

export const IconToggle: FC<Props> = ({ icons, onChange, defaultValue }) => {
	console.assert(icons.length > 1, 'Provide at least two Icons');
	const [ currentIcon, setCurrentIcon ] = useState<string>(defaultValue ?? icons[0]);
	
	const onIconClick = () => {
		const currentIndex = icons.indexOf(currentIcon);
		const newIcon = icons[(currentIndex + 1) % icons.length];
		console.log(newIcon);
		setCurrentIcon(newIcon);
		onChange(newIcon);
	};
	
	return <IonButton onClick={ onIconClick }><IonIcon icon={ currentIcon }/></IonButton>;
};
