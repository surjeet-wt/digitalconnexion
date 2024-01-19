import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const  CounterUppage = (props) => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <span className="plus">
                {counterOn ? <CountUp start={0} end={props.number} duration={2} delay={0} /> : null}
                
            </span>
        </ScrollTrigger>
    );
};

export default CounterUppage;
