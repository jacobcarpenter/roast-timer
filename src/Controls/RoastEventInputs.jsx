import { BigButton } from '../components';

export function RoastEventInputs({ onLogEvent }) {
	return (
		<div
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<BigButton onClick={() => onLogEvent('yellow')}>Yellow</BigButton>
			<BigButton onClick={() => onLogEvent('brown')}>Brown</BigButton>
			<BigButton onClick={() => onLogEvent('initial first crack')}>
				IFC
			</BigButton>
			<BigButton onClick={() => onLogEvent('rolling first crack')}>
				RFC
			</BigButton>
		</div>
	);
}
