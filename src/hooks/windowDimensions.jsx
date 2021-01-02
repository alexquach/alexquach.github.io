import { useState, useEffect } from "react"

const useWindowDimensions = (window) => {
    const [windowDimensions, setWindowDimensions] = useState({ height: undefined, width: undefined });
  
    useEffect(() => {
      function getWindowDimensions() {
        var width = undefined
        var height = undefined
        width = window.innerWidth
        height = window.innerHeight
  
        return {
          width,
          height
        };
      }
  
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      handleResize()
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }

  export default useWindowDimensions