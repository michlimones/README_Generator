// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  switch (license) {
    case 'Academic.Free.License':
      badge = 'https://img.shields.io/badge/license-Academic.Free.License-blue';
      break;
    case 'Boost.Software.License':
      badge =
        'https://img.shields.io/badge/license-Boost.Software.License-blue';
      break;
    case 'ISC':
      badge = 'https://img.shields.io/badge/license-ISC-blue';
      break;
    case 'MIT':
      badge = 'https://img.shields.io/badge/license-MIT-blue';
      break;
    case 'PostgreSQL.License':
      badge = 'https://img.shields.io/badge/license-PostgreSQL.License-blue';
      break;
    default:
      badge = '';
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  switch (license) {
    case 'Academic.Free.License':
      link = 'https://opensource.org/licenses/AFL-3.0';
      break;
    case 'Boost.Software.License':
      link = 'https://www.boost.org/users/license.html';
      break;
    case 'ISC':
      link = 'https://opensource.org/licenses/ISC';
      break;
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'PostgreSQL.License':
      link = 'https://www.postgresql.org/about/licence/';
      break;
    default:
      link = '';
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  let licenseInfo = '';
  if (license != '') {
    licenseInfo = `[![GitHub License](${licenseBadge})${licenseLink}]`;
  }
  return licenseInfo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseSection}

## Table of Contents
1.  [Description](#description)
2.  [Installation](#installation)
3.  [Usage](#usage)
4.  [Contibution](#contribution)
5.  [Test](#test)
6.  [Questions](#questions)
7.  [License](#license)
        
## [Description](#description)
    ${data.description}

## Installation (#installation)
    ${data.installation}

## [Usage](#usage)
    ${data.usage}

## [Contribution](#contribution)
    If others would like to contribute to this project they may ${data.contribute} the Repo.

## [Test](#test)
    The testing used for this application
     ${data.test}

## [Questions](questions)
    If you have any questions, feel free to reach out to me via GitHub: ${data.github}
    
    or you may also send me an email at: ${data.email}

## [license](#license)
    This application is licensed under: ${data.license}
    ${licenseSection}`;
}

module.exports = generateMarkdown;
