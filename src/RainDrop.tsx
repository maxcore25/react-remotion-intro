import React from 'react';
import {useCurrentFrame, interpolate, spring, useVideoConfig} from 'remotion';

const RainDrop: React.FC<{
	delay: number;
	x: string;
	size: number;
}> = ({delay, x, size}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({
		fps,
		frame: frame - delay,
		config: {
			damping: 1000,
		},
	});
	const top = interpolate(drop, [0, 1], [-0.2, 1.1]);

	return (
		<div
			style={{
				width: 100,
				height: 100,
				background: 'lightblue',
				borderRadius: '50%',
				position: 'absolute',
				left: x,
				top: top * 100 + '%',
				transform: `scale(${size})`,
			}}
		/>
	);
};

export default RainDrop;
