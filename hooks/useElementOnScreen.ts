import React,{useRef,useEffect,useState} from "react"
interface props{
    callback?:any
}
const useElementOnScreen = ({callback}:props) => {
    const options={
      root: null,
      rootMargin: "200px",
      threshold: buildThresholdList()

    }
    const containerRef = useRef<HTMLElement>(null)
    const [ isVisible, setIsVisible ] = useState(false)
    const [ratio,setRatio] = useState(0);
    const callbackFunction:IntersectionObserverCallback = (entries) => {
      const [ entry ] = entries
      setIsVisible(entry.isIntersecting)
      setRatio(entry.intersectionRatio)
      callback();
    }
  
    useEffect(() => {
      
      const observer = new IntersectionObserver(callbackFunction,options )
      if (containerRef.current) observer.observe(containerRef.current)
      
      return () => {
        if(containerRef.current) observer.unobserve(containerRef.current)
      }
    }, [containerRef, options])
  
    return {containerRef, isVisible,ratio}
  }
  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 100;
  
    for (let i=40; i<=numSteps; i++) {
      let ratio = i/numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push();
    return thresholds;
  }
export default useElementOnScreen;