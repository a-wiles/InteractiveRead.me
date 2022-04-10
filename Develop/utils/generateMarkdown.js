// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licenseInput) {
    return 
      `![badge](https://img.shields.io/badge/license-${license}-red)`
} else {
  return 
  var licenses = [];
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return renderLicenseBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseLink(data.license)}

  ## Table-of-Contents
  * [Description] (#description)
  * [Installation Instructions] (#installation)
  * [License] (#license)
  * [Usage Instructions] (#usage)
  * [Test Instructions] (#tests)
  * [Contributions] (#contribution)
  
  
  ## Description
  ${data.description}

  ##Installation
  ${data.installation}

  ##License
  This project is made by: ${data.license}

  ##Usage Instructions
  ${data.usage}

  ##Test Instructions
  ${data.test}

  ##Contributions
  ${data.contribution}
`;
}

module.exports = generateMarkdown;
