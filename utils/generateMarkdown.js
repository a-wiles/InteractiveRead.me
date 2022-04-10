// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-green)

  ## Table-of-Contents
  * [Description](#description)
  * [Installation Instructions](#installation)
  * [License](#license)
  * [Usage Instructions](#usage)
  * [Test Instructions](#tests)
  * [Contributions](#contribution)
  * [Questions](#questions)
  
  
  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## License
  This project is made by: ${data.license}

  ## Usage
  ${data.usage}

  ## Test
  ${data.test}

  ## Contributions
  ${data.contribution}

  ## Questions
  * Github Account: [GitHub](https://github.com/${data.github})
  * Email Account: [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
