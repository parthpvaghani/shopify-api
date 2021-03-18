var express = require('express')
var axios = require('axios')
var app = express()


let port = 3000


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
  axios.get('https://b04073ec68aa548224d8ec8ed9040ccd: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@the-roy-in.myshopify.com/admin/api/2021-01/orders.json?status=any').then(response=>{
      console.log(response)
  }).catch(err=>{
      console.log(err)
  })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })