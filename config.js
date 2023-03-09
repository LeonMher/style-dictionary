module.exports = {
  source: ["path/to/styles.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "build/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
    },
  },
  properties: {
    all: {},
  },
};
