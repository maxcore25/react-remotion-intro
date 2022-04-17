import React, {useMemo} from 'react';
import {AbsoluteFill, random} from 'remotion';
import RainDrop from '../my-video/src/RainDrop';

const Rain: React.FC = () => {
	const drops = useMemo(() => {
		return new Array(300).fill(true).map((_, i) => {
			const x = random('x' + i) * 100 + '%';
			const delay = random('delay' + i) * 60;
			const size = random('size' + i) + 0.3;
			return {x, delay, size};
		});
	}, []);

	return (
		<AbsoluteFill>
			{drops.map((d) => {
				return <RainDrop x={d.x} delay={d.delay} size={d.size} />;
			})}
		</AbsoluteFill>
	);
};

export default Rain;
