import { Box, Flex, Text } from 'theme-ui';
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
			<Box sx={{ fontVariantNumeric: 'tabular-nums' }}>
				<Text sx={{ fontSize: 5 }}>{wholePart}</Text>
				<Text sx={{ fontSize: 4 }}>&nbsp;{fractionalPart}</Text>
			</Box>
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
