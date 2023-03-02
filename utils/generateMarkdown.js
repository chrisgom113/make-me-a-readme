
function renderLicenseBadge(license) {
    if (license == "MIT") {
        return `![GitHub MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)`
      } else if(license == "Mozilla Public License 2.0") {
        return `![Github Mozilla License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
      } else if(license == "The Unlicense") {
        return `![Github Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
      }else if(license == "ISC") {
        return `![Github ISC License](https://img.shields.io/badge/License-ISC-blue.svg)`
      }
      return ''
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}


function renderLicenseSection(license) {
    if (license !== "None") {
        return (
          `
          Copyright © ${license}. All rights reserved. 
        
          Licensed under the ${license} license. 
          
          `
    
        )
      }
      return ''
}


function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description


  ${data.description}

  ## Table of Contents


  - [Installation](#installation)

  - [Usage](#usage)

  - [License](#license)

  - [Contributing](#contributing)

  - [Tests](#tests)

  - [Questions](#questions)



  ## Installation


  Use 'npm i' to download the dependencies listed below:

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

    For any questions, find me on Github or send me an email:

    Github: https://github.com/${data.github}

    Email: ${data.email}

`;
}

module.exports = generateMarkdown;