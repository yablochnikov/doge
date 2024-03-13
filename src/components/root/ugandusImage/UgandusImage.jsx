import { useEffect, useRef, useState } from "react";
import "./style.scss"
import useWindowSize from "../../hooks/useWindowSize";
export default function UgandusImage() {

    const {width} = useWindowSize()
    const [multiply, setMultiply] = useState(1)

    const eyeballLeftRef = useRef(null);
    const eyeballRightRef = useRef(null);
    const cloudOneRef = useRef(null);
    const cloudTwoRef = useRef(null);
    const cloudThreeRef = useRef(null);
    const cloudFourRef = useRef(null);
    const cloudFourTextRef = useRef(null);

    useEffect(()=>{
        if(width && width > 1920){
            setMultiply(0.5)
        }

        if(width && width < 1920){
            setMultiply(1)
        }
    },[width])

    useEffect(() => {
        const handleMouseMove = (event) => {
            const posX = event.clientX - window.innerWidth / 2;
            const posY = event.clientY - window.innerHeight / 2;

            if (eyeballRightRef.current && eyeballLeftRef.current && width > 600) {
                eyeballLeftRef.current.style.transform   = `translate(${posX * 0.04 * multiply}%, ${posY * 0.06 * multiply}%)`
                eyeballRightRef.current.style.transform  = `translate(${posX * 0.1 * multiply}%, ${posY * 0.08 * multiply}%)`
                cloudOneRef.current.style.transform      = `translate(${posX * 0.001 * multiply}%, ${posY * 0.002 * multiply}%)`
                cloudTwoRef.current.style.transform      = `translate(${posX * 0.002 * multiply}%, ${posY * 0.002 * multiply}%)`
                cloudThreeRef.current.style.transform    = `translate(${posX * 0.003 * multiply}%, ${posY * 0.002 * multiply}%)`
                cloudFourRef.current.style.transform     = `translate(${posX * 0.004 * multiply}%, ${posY * 0.002 * multiply}%)`
                cloudFourTextRef.current.style.transform = `translate(${posX * 0.004 * multiply}%, ${posY * 0.002 * multiply}%)`
            }
        }

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, [multiply])

    return (
        <div className="ugandus-image">
            <img src="/ugandus.png" className="ugandus"/>
            <img src="/left-aye.png" ref={eyeballLeftRef} id="eyeball" className="ugandus-image-eye-left"/>
            <img src="/right-aye.png" ref={eyeballRightRef} id="eyeball"  className="ugandus-image-eye-right"/>
            <img src="/cloud-1.png" ref={cloudOneRef} className="ugandus-image-cloud-1"/>
            <img src="/cloud-2.png" ref={cloudTwoRef} className="ugandus-image-cloud-2"/>
            <img src="/cloud-3.png" ref={cloudThreeRef} className="ugandus-image-cloud-3"/>
            <img src="/cloud-4.png" ref={cloudFourRef} className="ugandus-image-cloud-4"/>
            <div className="text" ref={cloudFourTextRef}>
                I show u <br /> da wae !
            </div>
        </div>
    )
}