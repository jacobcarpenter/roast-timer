export const temperatureDelta = 0.25;

// NOTE: if vite is complaing about the record syntax; delete the `#` and save.
// Then after a successful reload, re-add it, and save again.

// TODO: look into vite dependency pre-bundling + optimize deps settings
// https://vitejs.dev/guide/dep-pre-bundling.html
// https://vitejs.dev/config/#dep-optimization-options

export const modes = #{
	stopped: 'stopped',
	running: 'running',
};
