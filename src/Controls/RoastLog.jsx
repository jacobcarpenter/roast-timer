export function RoastLog({ events }) {
	return <>{JSON.stringify(events, null, 2)}</>;
}
