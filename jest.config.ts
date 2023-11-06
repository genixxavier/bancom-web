export default {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    moduleNameMapper: {
        '@app/(.*)': '<rootDir>/src/app/$1',
        'environments/(.*)': '<rootDir>/src/environments/$1',
    },
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: ['src/app/**/*.{ts,js}', '!src/app/**/*.module.ts', '!src/app/main.ts'],
};
