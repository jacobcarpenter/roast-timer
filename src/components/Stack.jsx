import { Flex } from 'theme-ui';

export function Stack({ spacing = 3, sx, ...props }) {
	return (
		<Flex
			sx={{
				flexDirection: 'column',
				gap: spacing,
				...sx,
			}}
			{...props}
		/>
	);
}
