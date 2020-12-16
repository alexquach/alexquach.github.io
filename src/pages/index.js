import React, { useState, useEffect } from 'react';
import HomeTemplate from "../home"
import Loader from "../components/Loader"

// markup
const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{backgroundColor: "black"}}>
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
          <HomeTemplate />
        )
      }
    </div>
  )
}

export default IndexPage
