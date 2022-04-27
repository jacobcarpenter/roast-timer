import { useReducer, useEffect } from 'react';
import { ThemeProvider, Box, Flex, Heading, Text } from 'theme-ui';
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
	const [roastLog, dispatch] = useReducer(
		appReducer,
		{ temperature: 4 },
		getInitialRoastLogState
	);

	const { mode } = roastLog;

	useEffect(() => {
		if (mode === modes.running) {
			const interval = setInterval(() => {
				dispatch({ type: 'tick' });
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [mode]);

	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Heading as="h1" padding={3}>
					Roast Timer
				</Heading>
				<Stack as="main" spacing={3} sx={{ paddingX: 3 }}>
					<TimerControls
						onStart={() => dispatch({ type: 'start' })}
						onStop={() => dispatch({ type: 'stop' })}
						onReset={() => dispatch({ type: 'reset' })}
						showReset={mode === modes.stopped && roastLog.events.length}
					/>

					<Box sx={{ textAlign: 'center' }}>
						<Text
							sx={{
								fontSize: 6,
								fontVariantNumeric: 'tabular-nums',
							}}
						>
							{formatTime(roastLog.ticks)}
						</Text>
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
			</Box>
		</ThemeProvider>
	);
}

function appReducer(state, action) {
	switch (action.type) {
		case 'start':
			return {
				...state,
				mode: modes.running,

				// only append an event if we're not running
				...(state.mode === modes.stopped && {
					events: [
						...state.events,
						{ time: state.ticks, temperature: state.temperature },
					],
				}),
			};

		case 'stop':
			return {
				...state,
				mode: modes.stopped,

				// only append an event if we're running
				...(state.mode === modes.running && {
					events: [
						...state.events,
						{
							time: state.ticks,
							temperature: state.temperature,
							eventName: 'finished',
						},
					],
				}),
			};

		// TODO: guard against accidental reset; persistent log?
		case 'reset':
			return getInitialRoastLogState({ temperature: state.temperature });

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

				// only append a temperature event if we're running
				...(state.mode === modes.running && {
					events: [
						...state.events,
						{ time: state.ticks, temperature: nextTemp },
					],
				}),
			};
		}

		case 'logEvent': {
			if (state.mode !== modes.running) {
				return state;
			}

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

		default:
			return state;
	}
}

function getInitialRoastLogState({ temperature }) {
	return {
		mode: modes.stopped,
		ticks: 0,
		temperature,
		events: [],
	};
}
