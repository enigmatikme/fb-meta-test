import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from 'react-helmet';

function App() {
  return (
    <div className="App">

      <Helmet>
      {/* <!-- HTML Meta Tags --> */}
<title>Lyric Keeper</title>
<meta name="description" content="A web & mobile app that allows you to easily keep track of all your lyrics!"/>

{/* <!-- Google / Search Engine Tags --> */}
<meta itemprop="name" content="Lyric Keeper"/>
<meta itemprop="description" content="A web & mobile app that allows you to easily keep track of all your lyrics!"/>
<meta itemprop="image" content="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"/>

{/* <!-- Facebook Meta Tags --> */}
<meta property="og:url" content="https://www.lyrickeeper.com"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Lyric Keeper"/>
<meta property="og:description" content="A web & mobile app that allows you to easily keep track of all your lyrics!"/>
<meta property="og:image" content="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"/>

{/* <!-- Twitter Meta Tags --> */}
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Lyric Keeper"/>
<meta name="twitter:description" content="A web & mobile app that allows you to easily keep track of all your lyrics!"/>
<meta name="twitter:image" content="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"/>
      </Helmet>
      <a
        className=''
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fenigmatikme.github.io%2Ffb-meta-test&amp;src=sdkpreparse"
        rel='noopener noreferrer'
        target='_blank'
      >FB</a>

      change 

<div class="fb-share-button" data-href="https://enigmatikme.github.io/fb-meta-test" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fenigmatikme.github.io%2Ffb-meta-test&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>




    </div>
  );
}

export default App;
