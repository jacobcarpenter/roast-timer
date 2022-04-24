import { useState, useReducer, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { modes, temperatureDelta } from './constants';
import {
	RoastEventInputs,
	RoastLog,
	TemperatureControls,
	TimerControls,
} from './Controls';

export function App() {
	const [mode, setMode] = useState(modes.stopped);
	const [roastLog, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case 'tick':
					return { ...state, ticks: state.ticks + 1 };

				case 'increaseTemp':
				case 'decreaseTemp': {
					// TODO: min/max range limits?

					const nextTemp =
						action.type === 'increaseTemp'
							? state.temperature + temperatureDelta
							: state.temperature - temperatureDelta;

					return {
						...state,
						temperature: nextTemp,
						events: [...state.events, { time: state.ticks, temp: nextTemp }],
					};
				}

				// TODO: guard against accidental reset; persistent log?
				case 'reset':
					return getInitialRoastLogState();

				default:
					return state;
			}
		},
		null,
		getInitialRoastLogState
	);

	useEffect(() => {
		if (mode === modes.running) {
			dispatch({ type: 'reset' });

			const interval = setInterval(() => {
				dispatch({ type: 'tick' });
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
						background: 'text', // need better color names? -- theme-ui presets
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
						{formatTime(roastLog.ticks)}
					</div>
					<div
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							paddingX: 3,
						}}
					>
						<RoastEventInputs />
						<TemperatureControls
							temperature={roastLog.temperature}
							onIncrease={() => dispatch({ type: 'increaseTemp' })}
							onDecrease={() => dispatch({ type: 'decreaseTemp' })}
						/>
					</div>

					<div>
						<RoastLog events={roastLog.events} />
					</div>
				</main>
			</div>
		</ThemeProvider>
	);
}

function getInitialRoastLogState() {
	return {
		ticks: 0,
		temperature: 4,
		events: [],
	};
}

function formatTime(ticks) {
	const minutes = `${Math.trunc(ticks / 60)}`.padStart(2, '0');
	const seconds = `${ticks % 60}`.padStart(2, '0');

	return `${minutes}:${seconds}`;
}
