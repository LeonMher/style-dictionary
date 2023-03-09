Install style-dictionary first 


npm install style-dictionary

********************************************

Place this file in the root folder

config.js

############################

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

############################


Run the following command and it will initialize a project with default files. Then simply replace the files with your tokens
--------------------------------
style-dictionary init basic
--------------------------------



And this is how you can use it in your SCSS file 
_________________________________________________

@import "../build/scss/variables";

body {
  background-color: $color-base-red;
}






