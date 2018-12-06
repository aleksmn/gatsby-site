import React from "react"
import Link from "gatsby-link"

export default () => 
  <div style={{color: 'tomato'}}>
    <h1>Hello world it`s me, Mario!</h1>
    <p>This is a paragraph</p>
    <br />
    <Link to="/page-2/">Page 2</Link>
    <br />
    <Link to="/counter/">Counter</Link>
  </div>

