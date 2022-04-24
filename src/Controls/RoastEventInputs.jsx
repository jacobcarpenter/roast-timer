import { BigButton } from '../components';

export function RoastEventInputs() {
	return (
		<div
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<BigButton>Yellow</BigButton>
			<BigButton>Brown</BigButton>
			<BigButton>IFC</BigButton>
			<BigButton>RFC</BigButton>
		</div>
	);
}
