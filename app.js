const https = require('https');

console.log('hello i am sumit');

https.get('https://google.com',(res)=>{
    console.log("answer come")
})
