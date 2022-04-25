import { formatTime } from '../util';

export function RoastLog({ events }) {
	// TODO: reduce multiple close consecutive events to a single entry
	// carry temp forward across events where it's missing? (alternatively have events always carry a temp?)
	// TODO: still possible to get duplicate keys if two events w/ same eventName are logged at same time

	const condensedEvents = events.reduce((acc, curr) => {
		const lastEvent = acc.at(-1);
		if (lastEvent && !lastEvent.eventName && curr.time - lastEvent.time < 2) {
			return [...acc.slice(0, -1), curr];
		}

		return [...acc, curr];
	}, []);

	return (
		<>
			{condensedEvents.map((e) => (
				<div key={`${e.time}|${e.eventName}`}>
					{`${[formatTime(e.time), e.eventName ?? e.temperature]
						.filter((x) => x)
						.join(' — ')}`}
				</div>
			))}
		</>
	);
}
