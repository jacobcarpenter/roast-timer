import { useState, useReducer, useEffect } from 'react';
import { ThemeProvider, Box, Flex, Heading } from 'theme-ui';
import { theme } from './theme';
import { modes, temperatureDelta } from './constants';
import { formatTime } from './util';
import { Stack } from './components';
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
			// TODO: roll mode in and reject actions when in the wrong mode?
			// TODO: factor function out of component?

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
						events: [
							...state.events,
							{ time: state.ticks, temperature: nextTemp },
						],
					};
				}

				case 'logEvent': {
					return {
						...state,
						events: [
							...state.events,
							{
								time: state.ticks,
								temperature: state.temperature,
								eventName: action.eventName,
							},
						],
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
				<Heading as="h1" padding={3}>
					Roast Timer
				</Heading>
				<Stack as="main" spacing={3} sx={{ paddingX: 3 }}>
					<TimerControls setMode={setMode} />

					<Box
						sx={{
							fontSize: '48px',
							textAlign: 'center',
							fontVariantNumeric: 'tabular-nums',
						}}
					>
						{formatTime(roastLog.ticks)}
					</Box>

					<Flex sx={{ justifyContent: 'space-between' }}>
						<RoastEventInputs
							onLogEvent={(eventName) =>
								dispatch({ type: 'logEvent', eventName })
							}
						/>
						<TemperatureControls
							temperature={roastLog.temperature}
							onIncrease={() => dispatch({ type: 'increaseTemp' })}
							onDecrease={() => dispatch({ type: 'decreaseTemp' })}
						/>
					</Flex>

					<Box>
						<RoastLog events={roastLog.events} />
					</Box>
				</Stack>
			</div>
		</ThemeProvider>
	);
}

function getInitialRoastLogState() {
	return {
		ticks: 0,
		temperature: 4,
		events: [{ time: 0, temperature: 4 }],
	};
}
