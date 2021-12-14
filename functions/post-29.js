exports.handler = async event => {
  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://optionsfeed.club/best-cystic-acne-removal-of-all-time-2/05/'
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
