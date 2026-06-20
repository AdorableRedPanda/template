import type React from 'react';

import { cls } from '@/utils.ts';

import css from './styles.module.css';

export const Logos: React.FC = () => {
	return (
		<div className={css.logos}>
			<img alt="Bun Logo" className={cls(css.logo, css.bun)} src="./bun.svg" />
			<img
				alt="Vite Logo"
				className={cls(css.logo, css.vite)}
				src="./vite.png"
			/>
			<img
				alt="TS Logo"
				className={cls(css.logo, css.ts)}
				src="./typescript.svg"
			/>
			<img
				alt="React Logo"
				className={cls(css.logo, css.react)}
				src="./react.svg"
			/>
		</div>
	);
};
