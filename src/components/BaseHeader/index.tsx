import {Link} from "react-router-dom";
import React from "react";
import './index.less'

const BaseHeader = ()=>{
  return(
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
    </nav>
  )
}

export default BaseHeader;
