import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Content from './Content';

function Main() {

    const [light, setLight] = useState(true);

    const theme = () => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return setLight(light => !light);
        }
    }

    useEffect(() => {
        // check if the device using the darkmode or not
        // changing the style background of application.
        theme();
    }, []);

    return (
        <div>

            <Helmet bodyAttributes={light ?
                { style: `background-color : white;` } :
                { style: `background-color : black;` }} />

            <Content theme={light}></Content>
        </div>
    );
}

export default Main;
