import { useState, useEffect } from 'react';
import moment from 'moment';

const useTime = () => {
    let refreshCycle = 1000*30;
    //returns current time and re-renders every 'refresh cycle' ms
    // inspired by: https://medium.com/javascript-in-plain-english/usetime-react-hook-f57979338de

    const [time, setTime] = useState(moment().format('MM/DD/YYYY H:mm'));

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(moment().format('MM/DD/YYYY H:mm'));
        }, refreshCycle);
        return ()=> clearInterval(interval);
    }, [refreshCycle, setTime]);

    return time; // returns time string in format HHmm eg 0800, 2359, etc
}

export default useTime;