const weblinkData = require('../data/weblinks')

// searches the weblinks data based on keywords
function getResults(searchTerm) {
   const weblinks = weblinkData.find(e => e.keywords === searchTerm.toLowerCase())
   return weblinks ? 
      { results: weblinks.weblinks } :
      { results: null }
}

module.exports = getResults;