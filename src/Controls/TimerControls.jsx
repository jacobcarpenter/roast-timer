import { Flex } from 'theme-ui';
import { BigButton } from '../components';

export function TimerControls({ showReset, onStart, onStop, onReset }) {
	return (
		<Flex sx={{ gap: 2 }}>
			<BigButton variant="black" sx={{ flex: '1 1 0' }} onClick={onStart}>
				Start
			</BigButton>

			{!showReset ? (
				<BigButton variant="black" sx={{ flex: '1 1 0' }} onClick={onStop}>
					Stop
				</BigButton>
			) : (
				<BigButton variant="secondary" sx={{ flex: '1 1 0' }} onClick={onReset}>
					Reset
				</BigButton>
			)}
		</Flex>
	);
}
