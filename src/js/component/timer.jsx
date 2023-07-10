import React, {useEffect, useState} from "react";

const Timer = (props) => {
    const [seconds, setSeconds] = useState(props.seconds);
    const [countUp, setCountUp] = useState(false);
    
    // counting up or down
    useEffect(()=> {
        if(props.seconds===0){
            setCountUp(true);
        }
    },[props.seconds]);

    useEffect(()=> {
        
        let interval;
        if(countUp){
            interval = setInterval (()=> {
                setSeconds((prevSeconds)=>prevSeconds+1);   
            },1000); 
        } else {
            interval = setInterval (()=> {
                setSeconds((prevSeconds)=>prevSeconds-1);    
            }, 1000);
        }

        return ()=> {
            clearInterval(interval);   
        };
    },[countUp, seconds]);

    useEffect(() => {
        if (!countUp && seconds <= 0) {
            setSeconds(0);   
        }
      }, [countUp, seconds]);
    
    return (
        <div>
            <h2>timer: {seconds}</h2>
        </div>
    )
}

export default Timer;