module.exports = {
	preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
	setupFiles: ['./jest.setup.js'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
		'!**/__mocks__/**',
	],
	coveragePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/coverage/',
		'<rootDir>/jest.config.js',
		'<rootDir>/jest.setup.js',
	],
	coverageDirectory: './coverage',
};
