module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    modulePaths: ["<rootDir>/src"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            { tsconfig: "tsconfig.json" }
        ]
    },
    transformIgnorePatterns: [
        "/node_modules/"
    ],
    testMatch: ["**/*.spec.ts"],
    collectCoverageFrom: ["src/**/*.ts"],
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov"]
}
