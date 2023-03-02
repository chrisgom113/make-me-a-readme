
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
      }
      return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        return (
          `Copyright © ${license}. All rights reserved. 
          
          Licensed under the ${license} license.`
    
        )
      }
      return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)

  * [Usage](#Usage)

  * [License](#License)

  * [Contributing](#Contributing)

  * [Tests](#Tests)

  * [Questions](#Questions)

  ## Installation

  Run the below code in the command line to download dependencies needed for project
  \`\`\`
  ${data.installations}
  \`\`\`

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributors}

  ## Tests

  Run code below to test functionality:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

    Github: ${data.github}

    For any additional questions, contact me at: ${data.email}
`;
}

module.exports = generateMarkdown;