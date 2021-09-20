module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue}", "!src/main.js", "!src/App.vue", "!src/routes.js"],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
