import { useState, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { modes } from './constants';
import {
	RoastEventInputs,
	TemperatureControls,
	TimerControls,
} from './Controls';

export function App() {
	const [mode, setMode] = useState(modes.stopped);
	const [ticks, setTicks] = useState(0);

	useEffect(() => {
		if (mode === modes.running) {
			setTicks(0);

			const interval = setInterval(() => {
				setTicks((ticks) => ticks + 1);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [mode]);

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<header
					sx={{
						padding: 3,
						background: 'text', // need better color names?
						color: 'background', // ditto above
						fontWeight: 'bold',
					}}
				>
					Roast Timer
				</header>
				<main>
					<TimerControls setMode={setMode} />
					<div
						sx={{
							margin: 3,
							fontSize: '48px',
							textAlign: 'center',
							fontVariantNumeric: 'tabular-nums',
						}}
					>
						{formatTime(ticks)}
					</div>
					<div
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<RoastEventInputs />
						<TemperatureControls />
					</div>
				</main>
			</div>
		</ThemeProvider>
	);
}

function formatTime(ticks) {
	const minutes = `${Math.trunc(ticks / 60)}`.padStart(2, '0');
	const seconds = `${ticks % 60}`.padStart(2, '0');

	return `${minutes}:${seconds}`;
}
