import { Button } from 'theme-ui';

export function BigButton({ sx, ...props }) {
	return (
		<Button
			sx={{
				height: '50px',
				border: 'solid 1px #ccc',
				color: 'text',
				...sx,
			}}
			{...props}
		/>
	);
}
