import Post from '@models/post'
import './styles/style.css'
import json from './assets/json.json'
import logo from './assets/logo.png'
import xml from './assets/data.xml'
import csv from './assets/business.csv'
import $ from 'jquery'
import './styles/less.less'
import './styles/scss.scss'


const post = new Post('Webpack Post title', logo)

$('pre').addClass('code').html(post.toString())

console.log('Post: ', post.toString())
console.log('JSON: ', json)
console.log('xml: ', xml)
console.log('csv: ', csv)