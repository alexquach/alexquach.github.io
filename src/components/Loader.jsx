import React, { useState, useEffect } from 'react';
import { StyledLoader } from './styles'
import Helmet from "react-helmet";
import Anime from "react-anime"
import "animate.css/animate.min.css";

// import LazyLinePainter from 'lazy-line-painter'

const Loader = ({ finishLoading }) => {

    const [logoSpin, setLogoSpin] = useState(0);

    const somefunc = () => {
        console.log(window.LazyLinePainter != undefined)
        const timeout = setTimeout(() => {
            console.log(window.LazyLinePainter != undefined)
            if (window.LazyLinePainter != undefined) {
                const LazyLinePainter = window.LazyLinePainter;
                console.log(LazyLinePainter)
                let el = document.querySelector('#Pentagon_Loader');
                el.style.opacity = 1;
                setLogoSpin(1)
                let myAnimation = new LazyLinePainter(el, { "ease": "easeInOutCubic", "strokeWidth": 8, "strokeOpacity": 1, "strokeColor": "#FFF", "strokeCap": "square" });
                myAnimation.paint();

                const timeout = setTimeout(() => finishLoading(true), 3000);
                return () => clearTimeout(timeout);
            }
        }, 100);

    };

    return (
        <StyledLoader>
            <Helmet
                script={[{ src: "https://cdn.jsdelivr.net/npm/lazy-line-painter@1.9.4/lib/lazy-line-painter-1.9.4.min.js" }]}
                // Helmet doesn't support `onload` in script objects so we have to hack in our own
                onChangeClientState={() => somefunc()}
            />

            <svg
                viewBox="0 0 943.92 902.15"
                data-llp-composed="true"
                id="Pentagon_Loader"
                className="prefix__lazy-line-painter"
            >
                <defs>
                    <style>
                        {
                            ".prefix__cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:8px}"
                        }
                    </style>
                </defs>
                <g id="prefix__Layer_2" data-name="Layer 2">
                    <g id="prefix__Layer_4" data-name="Layer 4">
                        <path
                            className="prefix__cls-1"
                            d="M501.23 16.27c-13.35-9.69-35.19-9.69-48.54 0L25.7 326.5c-13.35 9.7-20.1 30.47-15 46.16l163.1 502c5.1 15.69 22.77 28.53 39.27 28.53h527.78c16.5 0 34.17-12.84 39.27-28.53l163.1-502c5.1-15.69-1.65-36.46-15-46.16z"
                            data-llp-id="Pentagon_Component-0"
                            data-llp-duration={750}
                            data-llp-delay={0}
                            fillOpacity={0}
                        />
                        <path
                            className="prefix__cls-1"
                            d="M541.05 45.2L187.72 301.91c-13.35 9.7-20.1 30.47-15 46.17l125.54 386.38"
                            data-llp-id="Pentagon_Component-1"
                            data-llp-duration={750}
                            data-llp-delay={750}
                            fillOpacity={0}
                        />
                        <path
                            className="prefix__cls-1"
                            d="M69.32 294.81l134.15 411.13c5.11 15.68 22.8 28.52 39.3 28.52H658.7"
                            data-llp-id="Pentagon_Component-2"
                            data-llp-duration={750}
                            data-llp-delay={750}
                            fillOpacity={0}
                        />
                        <path
                            className="prefix__cls-1"
                            data-llp-id="Pentagon_Component-3"
                            data-llp-duration={750}
                            data-llp-delay={750}
                            fillOpacity={0}
                            d="M155.87 819.45h445.21c16.5 0 34.17-12.84 39.27-28.53l129.73-399.26"
                        />
                        <path
                            className="prefix__cls-1"
                            data-llp-id="Pentagon_Component-4"
                            data-llp-duration={750}
                            data-llp-delay={750}
                            fillOpacity={0}
                            d="M686 903.15l141.24-434.7c5.1-15.69-1.65-36.47-15-46.16L478.48 179.8"
                        />
                        <path
                            className="prefix__cls-1"
                            data-llp-id="Pentagon_Component-5"
                            data-llp-duration={750}
                            data-llp-delay={750}
                            fillOpacity={0}
                            d="M927.94 419.67L562.4 154.09c-13.35-9.69-35.19-9.69-48.54 0l-327 237.57"
                        />
                    </g>
                </g>
            </svg>
        </StyledLoader>
    );
};

export default Loader