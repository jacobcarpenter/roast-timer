import { modes } from '../constants';
import { BigButton } from '../components';

export function TimerControls({ setMode }) {
	return (
		<div
			sx={{
				display: 'flex',
				gap: 2,
			}}
		>
			<BigButton
				sx={{ flex: '1 1 auto' }}
				onClick={() => setMode(modes.running)}
			>
				Start
			</BigButton>
			<BigButton
				sx={{ flex: '1 1 auto' }}
				onClick={() => setMode(modes.stopped)}
			>
				Stop
			</BigButton>
		</div>
	);
}
