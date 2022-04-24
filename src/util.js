export function formatTime(ticks) {
	const minutes = `${Math.trunc(ticks / 60)}`.padStart(2, '0');
	const seconds = `${ticks % 60}`.padStart(2, '0');

	return `${minutes}:${seconds}`;
}
