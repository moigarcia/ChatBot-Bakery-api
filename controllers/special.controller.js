const request = require('request');

module.exports.get = (req, res, next) => {
  request({
    url: 'https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery',
    method: 'get',
    headers: {
      'Content-Type' :' application/json',
    },
  }, function(error, response, body) {
    if (error) { 
      console.error(error, response, body); 
      res.json({})
    }
    else if (response.statusCode >= 400) { 
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body); 
      res.json({})
    }
    else {
      console.log('Done!')
      res.status(200).json(response)
    }
  })
}