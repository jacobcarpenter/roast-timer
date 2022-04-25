import { Button } from 'theme-ui';

export function BigButton({ sx, ...props }) {
	return (
		<Button
			sx={{
				height: '50px',
				...sx,
			}}
			{...props}
		/>
	);
}
