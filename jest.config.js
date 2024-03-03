module.exports = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$',
    '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$',
    '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$',
    '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.jsx$',
  ],
  collectCoverageFrom: [
    './src/**',
    '<rootDir>/src/**/*.{js,ts,jsx,tsx} ',
    '!<rootDir>/**/*Type.{js,ts,jsx,tsx}',
    '!<rootDir>/**/icons/**',
    '!<rootDir>/**/*.enum.{js,ts,jsx,tsx}',
    '!<rootDir>/**/*.styled.{js,ts,jsx,tsx}',
    '!<rootDir>/**/index.ts?',
    '!<rootDir>/**/vite-env.d.ts',
    '!<rootDir>/**/main.tsx',
    '!<rootDir>/**/App.tsx',
    //'!**/inputTestIdEnum.ts',
  ],
};
