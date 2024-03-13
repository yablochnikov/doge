import Button from "../../components/general/ui/button/Button"
import useWindowSize from "../../components/hooks/useWindowSize"
import UgandusImage from "../../components/root/ugandusImage/UgandusImage"
import "./style.scss"
import React, { useEffect, useState } from 'react'


export default function Root () {
    const {width} = useWindowSize()

    const [trempeng, setTrempeng] = useState({position: "absolute", top: "10vh", left: "5vw"})
    const [buyNow, setBuyNow] = useState({position: "absolute", top: "10vh", right: "5vw"})
    const [twitter, setTwitter] = useState({position: "absolute", bottom: "10vh", left: "5vw"})
    const [telegram, setTelegram] = useState({position: "absolute", bottom: "10vh", right: "5vw"})

    useEffect(()=>{
        if(width > 600){
            setTrempeng({position: "absolute", top: "10vh", left: "5vw"})
            setBuyNow({position: "absolute", top: "10vh", right: "5vw"})
            setTwitter({position: "absolute", bottom: "10vh", left: "5vw"})
            setTelegram({position: "absolute", bottom: "10vh", right: "5vw"})
        } else {
            setTrempeng({position: "absolute", top: "200px", left: "5vw"})
            setBuyNow({position: "absolute", top: "200px", right: "5vw"})
            setTwitter({position: "absolute", top: "270px", left: "5vw"})
            setTelegram({position: "absolute", top: "270px", right: "5vw"})
        }
    },[width])
    return (
        <div className="root-p cen">
            {/* <UgandusImage /> */}
            <img src="/bg.png" className="bg"/>
            <div className="title">
                MAKE ANTARCTIDA <br /> GREAT AGAIN
            </div>
            {
                width > 700 &&
                <div className="bottom-text">
                <div className="bottom-text-inner">
                    CA: A3eME5CetyZPBoWbRUwY3tSe25S6tb18ba9ZPbWk9eFJ
                </div>
                </div>
            }

            <Button title="$trempeng" linkTo="/" style={trempeng}/>
            <Button title="buy now" linkTo="/" style={buyNow}/>
            <Button title="twitter" linkTo="/" style={twitter}/>
            <Button title="telegram" linkTo="/" style={telegram}/>
        </div>
    )
}



