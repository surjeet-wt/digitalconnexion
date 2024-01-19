import React, { useEffect } from 'react';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;

export default class WowAnimation extends React.Component {
    componentDidMount() {
        if (WOW) {
            const wow = new WOW({
                boxClass: "wow", // default
                animateClass: "animated", // default
                offset: 0, // default
                mobile: true, // default
                live: true, // default
            });
            wow.init();
        }
    }

    render() {
        return (
             <h2 className="wow fadeInUp d-none"></h2>
        );
    }
}
