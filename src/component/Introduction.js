import React from 'react';
import { useTrail, animated, useSpring } from 'react-spring';

import '../styles/Introduction.css';

function Introduction(props) {

    const introduction = ["Hi,", "I'am", "Darmawan,", "Web", "Developer."];

    const [{ color }] = useSpring(
        () => ({
            from: {
                color: `var(--from, black)`,
            },
            to: [
                { color: `var(--to, red)` },
                { color: `var(--to, green)` },
                { color: `var(--to, blue)` },
                { color: `var(--to, magenta)` },
                { color: `var(--to, cyan)` },
                { color: `var(--to, orange)` }
            ],
            config: { tension: 280, friction: 120 },
            loop: {
                reverse: true,
            },
        }),
        []
    );

    const trail = useTrail(introduction.length, {
        config: {
            mass: 5, tension: 2000, friction: 200, duration: 600
        },
        opacity: 1,
        x: 20,
        height: 80,
        from: { opacity: 0, x: 20, height: 0 }
    });

    const status = useSpring({
        from: { y: -200, opacity: 0 },
        to: { y: 0, opacity: 1 },
        config: { duration: 4500 }
    });

    return (
        <div className="trails-main">
            <div>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={introduction[index]}
                        className={props.theme ? 'trails-text' : 'darktrails-text'}
                        style={{
                            ...rest,
                            transform: x.to(x => `translate3d(0,${x}px,0)`)
                        }}
                    >
                        <animated.div style={index === 2 ? { color, height } : { height }}>
                            {introduction[index]}
                        </animated.div>

                    </animated.div>
                ))}

                <br></br>

                <animated.div className='status' style={{ ...status, fontWeight: 300, fontStyle: 'italic' }}>Junior Front End / Back End Web Developer</animated.div>

            </div>
        </div >
    );
};

export default Introduction;