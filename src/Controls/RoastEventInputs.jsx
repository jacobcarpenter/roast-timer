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
			<BigButton variant="secondary" onClick={() => onLogEvent('yellow')}>
				Yellow
			</BigButton>
			<BigButton variant="secondary" onClick={() => onLogEvent('brown')}>
				Brown
			</BigButton>
			<BigButton
				variant="secondary"
				onClick={() => onLogEvent('initial first crack')}
			>
				IFC
			</BigButton>
			<BigButton
				variant="secondary"
				onClick={() => onLogEvent('rolling first crack')}
			>
				RFC
			</BigButton>
		</div>
	);
}
