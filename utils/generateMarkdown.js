function generateMarkdown( pData ) {
    // SECTION Create the Badge Markdown
    if ( pData.createBadge ){
        pData.badge = `![${ pData.badgeLabel }: ${ pData.badgeValue }](https://img.shields.io/badge/${ pData.badgeLabel }-${ pData.badgeValue }-${ pData.badgeColor })\n\n`;
    } else {
        pData.badge = '\n';
    }
    // !SECTION Create the Badge Markdown

    // SECTION Create Questions Section Content
    if ( pData.githubUsername || pData.githubEmail ){
        pData.owner = '';
        if ( pData.githubEmail ){
            pData.owner += `Contact me at [${ pData.githubEmail }](mailto:${ pData.githubEmail })`
        }
        if ( pData.githubUsername ){
            if ( pData.owner ){
                // Markdown needs two spaces at the end of the line to
                // create a line break
                pData.owner += '\n\n';
            }
            pData.owner += `![GitHub Profile Picture](https://github.com/${ pData.githubUsername }.png?size=100)`
        }
    } else {
        pData.owner = '- [ ] Provide contact details for the project'
    }
    // !SECTION Create Questions Section Content

    return `# ${ pData.title }

${ pData.badge }${ pData.description }

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

# Installation

${ pData.installation }

# Usage

${ pData.usage }

# License

${ pData.license }

# Contributing

${ pData.contributing }

# Tests

${ pData.tests }

# Questions

${ pData.owner }

`;
}

module.exports = generateMarkdown;
