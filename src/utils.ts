type Classname = boolean | null | string | undefined;
export const cls = (...classes: Classname[]) =>
	classes.filter(Boolean).join(' ');
