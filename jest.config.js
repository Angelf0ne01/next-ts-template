module.exports = {
    modulePaths: ["<rootDir>/src"],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
    ],
    preset: 'jest-expo',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    testMatch: ["<rootDir>/src/__tests__/**/*.test.tsx"],
    transformIgnorePatterns: [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@react-navigation)"
    ],
    restoreMocks: true,
    resetMocks: true

};