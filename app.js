'use strict'

const express = require('express')
const http = require('http')

const app = express()
app.get('/', (req,res) => {
	res.send('hell0world');
});

app.get('/couchdb', (req,res) => {
console.log(1);
	http.get('http://admin:adminpw@127.0.0.1:5984/mychannel_fabcar/_all_docs',(reps)=>{
	reps.on('data',(chunk)=>{
console.log(chunk.toString());
})	
})
});

app.listen(8000,'127.0.0.1');
console.log('started');
