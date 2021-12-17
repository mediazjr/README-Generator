// // TODO: Create a function that returns a license badge based on which license is passed in
// function generateMarkdown(data) {}
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage Information](#usage-information)
    4. [Contribution Guidelines](#contribution-guidelines)
    5. [Test Instructions](#test-instructions)
    6. [License](#license)
    7. [Questions](#questions)

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## Test Instructions 
  ${data.test}

  ## License 
  This app is covered by ${data.license}.

  ## Questions
  [GitHub Page](https://github.com/${data.username})

  Email: ${data.email}

  ${data.additional}

`;

}

module.exports = generateMarkdown;