exports.handler = async event => {
  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://optionsfeed.club/squeezing-another-cystic-aSqueezing%20another%20cystic%20acne.cne/13/'
      }
    }
  } else {
    let pathName = event.path.split('/')[3].split('-')
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: process.env.URL + '/' + pathName[0] + '-' + pathName[1] + '/'
      }
    }
  }
}
