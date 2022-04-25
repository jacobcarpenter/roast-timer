import { Flex } from 'theme-ui';
import { modes } from '../constants';
import { BigButton } from '../components';

export function TimerControls({ setMode }) {
	return (
		<Flex sx={{ gap: 2 }}>
			<BigButton
				variant="black"
				sx={{ flex: '1 1 auto' }}
				onClick={() => setMode(modes.running)}
			>
				Start
			</BigButton>
			<BigButton
				variant="black"
				sx={{ flex: '1 1 auto' }}
				onClick={() => setMode(modes.stopped)}
			>
				Stop
			</BigButton>
		</Flex>
	);
}
