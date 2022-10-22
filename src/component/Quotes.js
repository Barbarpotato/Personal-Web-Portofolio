import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

async function getQuoteData() {
    // get quote data from free source API
    // return an array of 2 element.
    let result = '';
    await fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => result = data);
    const random = Math.floor(Math.random() * result.length);
    return [result[random].text, result[random].author];
}

function Quotes() {

    // create state for quotes.
    const [quote, setQuote] = useState({});

    useEffect(() => {
        // calling the getQuoteData async func
        // if promise is resolved then get it from api
        // otherwise using minimum backup quote that we prepared.
        getQuoteData()
            .then(data => {
                if (data[1] === 'null') {
                    const getQuote = { text: data[0], author: 'Unkown' };
                    setQuote(quote => ({ ...quote, ...getQuote }));
                }
                else {
                    const getQuote = { text: data[0], author: 'Unkown' };
                    setQuote(quote => ({ ...quote, ...getQuote }));
                }
            })
            .catch(err => {
                const backUpQuote = [{
                    text: "Stop being afraid of what can go wrong and start being positive about what can go right."
                    , author: 'Anonymous'
                },
                {
                    text: "When you feel like quitting think about why you started."
                    , author: 'Anonymous'
                },
                {
                    text: "Be where your feet are."
                    , author: 'Anonymous'
                }
                ];

                const random = Math.floor(Math.random() * backUpQuote.length);
                const getQuote = { text: backUpQuote[random].text, author: backUpQuote[random].author };
                setQuote(quote => ({ ...quote, ...getQuote }));
            })
    }, []);

    return (
        <div className='row'>
            <motion.div className='row'
                initial={{ x: 10 }}
                whileInView={{ rotate: 360, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 6, type: 'spring', bounce: 0.85, repeat: Infinity, repeatDelay: 2 }}>
                <p className='imgIntro' id='imgIntro' style={{ 'fontSize': 200, 'textAlign': 'center', 'color': '#88CCBB' }}>{'<'}<span style={{ 'color': '#C9341C' }}>/</span>{'>'}</p>
            </motion.div>

            <motion.div className='row' style={{ 'marginTop': 50, 'fontStyle': 'italic' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 6 }}
                viewport={{ once: true }}>
                <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <p style={{ 'fontFamily': 'Brush Script', 'fontSize': 25, 'textAlign': 'center' }}>{quote.text}</p>
                    <p style={{ 'fontFamily': 'Brush Script', 'fontSize': 25, 'textAlign': 'center' }}>{'--' + quote.author}</p>
                </motion.div>
            </motion.div>
        </div >
    );
};

export default Quotes;