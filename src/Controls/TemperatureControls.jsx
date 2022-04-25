import { Flex } from 'theme-ui';
import { BigButton } from '../components';

export function TemperatureControls({ temperature, onIncrease, onDecrease }) {
	const wholePart = `${Math.trunc(temperature)}`;
	const fractionalPart = `${(temperature * 100) % 100}`.padEnd(2, '0');

	return (
		<Flex
			sx={{
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
			<Flex
				sx={{
					flexDirection: 'column',
					gap: 2,
				}}
			>
				<BigButton variant="primary" onClick={onIncrease}>
					Up
				</BigButton>
				<BigButton variant="primary" onClick={onDecrease}>
					Down
				</BigButton>
			</Flex>
		</Flex>
	);
}
