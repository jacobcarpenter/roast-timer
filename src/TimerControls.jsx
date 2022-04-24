import { modes } from './constants';

export function TimerControls({ setMode }) {
	return (
		<div
			sx={{
				display: 'flex',
				height: '40px',
			}}
		>
			<button sx={{ flex: '1 1 auto' }} onClick={() => setMode(modes.running)}>
				Start
			</button>
			<button sx={{ flex: '1 1 auto' }} onClick={() => setMode(modes.stopped)}>
				Stop
			</button>
		</div>
	);
}
