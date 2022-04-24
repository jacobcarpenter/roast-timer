import { BigButton } from '../components';

export function TemperatureControls() {
	return (
		<div
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: 3,
			}}
		>
			<div>4</div>
			<div
				sx={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<BigButton>Up</BigButton>
				<BigButton>Down</BigButton>
			</div>
		</div>
	);
}
