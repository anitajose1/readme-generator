// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  badgeLink = `https://img.shields.io/static/v1?label=License&message=${license}&color=blue`
  return badgeLink
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ""
  if (license) {
    link = `https://opensource.org/licenses/${license}`
    return link
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return licenseText = `Copyright (c) Anita Jose. All rights reserved. Licensed under the ${license} license.` 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  [![license](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.contents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
