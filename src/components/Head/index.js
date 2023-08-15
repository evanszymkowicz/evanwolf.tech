import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ title, description, image }) =>
  <Helmet>
    <html lang="en" amp />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description}/>
    <meta property="og:image" content={image} />
  </Helmet>

export default Head
