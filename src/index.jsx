import Post from '@models/post'
import './styles/style.css'
import json from './assets/json.json'
import logo from './assets/logo.png'
import xml from './assets/data.xml'
import csv from './assets/business.csv'
import $ from 'jquery'
import './styles/less.less'
import './styles/scss.scss'
import './bable.js'

import React from 'react'
import { render } from 'react-dom'

const post = new Post('Webpack Post title', logo)

// $('pre').addClass('code').html(post.toString())

const App = () => (<div className="container">
    <h1>Webpack Course</h1>
    
    <div className="logo" />
    
    <div className="boxSass">
        <div className="box">
            <pre/>
        </div>
    </div>

</div>)
render(<App />, document.getElementById('app'))


console.log('Post: ', post.toString())
console.log('JSON: ', json)
console.log('xml: ', xml)
console.log('csv: ', csv)