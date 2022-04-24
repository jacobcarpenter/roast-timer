import { BigButton } from '../components';

export function TemperatureControls({ temperature, onIncrease, onDecrease }) {
	const wholePart = `${Math.trunc(temperature)}`;
	const fractionalPart = `${(temperature * 100) % 100}`.padEnd(2, '0');

	return (
		<div
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: 3,
			}}
		>
			<div
				sx={{
					fontSize: 4,
					fontVariantNumeric: 'tabular-nums',
				}}
			>
				<span>{wholePart}</span>{' '}
				<span sx={{ fontSize: 3 }}>{fractionalPart}</span>
			</div>
			<div
				sx={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<BigButton onClick={onIncrease}>Up</BigButton>
				<BigButton onClick={onDecrease}>Down</BigButton>
			</div>
		</div>
	);
}
