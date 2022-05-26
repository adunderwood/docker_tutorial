const fs = require('fs');
const path = require('path');
const axios = require('axios')
const http = require('http');

const hostname = '127.0.0.1';
const port = 7777;

// get querystring parameters
var params=function(req){
  let q=req.url.split('?'),result={};
  if(q.length>=2){
      q[1].split('&').forEach((item)=>{
           try {
             result[item.split('=')[0]]=item.split('=')[1];
           } catch (e) {
             result[item.split('=')[0]]='';
           }
      })
  }
  return result;
}

var url_params;
const server = http.createServer((req, res) => {
  req.params=params(req);
  url_params = req.params;

  res.end("Hello world.");

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
