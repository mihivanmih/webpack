import Post from './post'
import './styles/style.css'
import json from './assets/json.json'
import logo from './assets/logo.png'
import xml from './assets/data.xml'
import csv from './assets/business.csv'


const post = new Post('Webpack Post title', logo)

console.log('Post: ', post.toString())
console.log('JSON: ', json)
console.log('xml: ', xml)
console.log('csv: ', csv)