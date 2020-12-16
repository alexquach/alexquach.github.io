import React, { useState, useEffect } from 'react';
import { StyledLoader } from './styles'

import Anime from "react-anime"
import "animate.css/animate.min.css";
import LazyLinePainter from 'lazy-line-painter'

const Loader = ({ finishLoading }) => {
    const [logoSpin, setLogoSpin] = useState(0);

    useEffect(() => {
        let el = document.querySelector('#Pentagon_Loader');
        el.style.opacity = 1;
        setLogoSpin(1)
        let myAnimation = new LazyLinePainter(el, { "ease": "easeInOutCubic", "strokeWidth": 8, "strokeOpacity": 1, "strokeColor": "#FFF", "strokeCap": "square" });
        myAnimation.paint();

        const timeout = setTimeout(() => finishLoading(true), 3000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledLoader>
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
                            d="M496.23 11.27c-13.35-9.69-35.19-9.69-48.54 0L20.7 321.5C7.35 331.2.6 352 5.7 367.66l163.1 502c5.1 15.69 22.77 28.53 39.27 28.53h527.78c16.5 0 34.17-12.84 39.27-28.53l163.1-502c5.1-15.69-1.65-36.46-15-46.16L560.32 57.84l-48.54-35.27z"
                            data-llp-id="Pentagon_Component-0"
                            data-llp-duration={750}
                            data-llp-delay={0}
                            fillOpacity={0}
                        />
                        <path
                            className="prefix__cls-1"
                            d="M536.05 40.2L182.72 296.91c-13.35 9.7-20.1 30.47-15 46.17L284 700.92c5.1 15.7 22.77 28.54 39.27 28.54H653.7"
                            data-llp-id="Pentagon_Component-1"
                            data-llp-duration={750}
                            data-llp-delay={750}
                            fillOpacity={0}
                        />
                        <path
                            className="prefix__cls-1"
                            d="M681 898.15l141.24-434.7c5.1-15.69-1.65-36.47-15-46.16L473.48 174.8"
                            data-llp-id="Pentagon_Component-2"
                            data-llp-duration={375}
                            data-llp-delay={750}
                            fillOpacity={0}
                        />
                        <path
                            className="prefix__cls-1"
                            data-llp-id="Pentagon_Component-3"
                            data-llp-duration={375}
                            data-llp-delay={1125}
                            fillOpacity={0}
                            d="M473.48 174.8l-291.6 211.86"
                        />
                        <path
                            className="prefix__cls-1"
                            data-llp-id="Pentagon_Component-4"
                            data-llp-duration={375}
                            data-llp-delay={750}
                            fillOpacity={0}
                            d="M64.32 289.81l171.07 524.64"
                        />
                        <path
                            className="prefix__cls-1"
                            d="M150.87 814.45h445.21c16.5 0 34.17-12.84 39.27-28.53l129.73-399.26"
                            data-llp-id="Pentagon_Component-5"
                            data-llp-duration={750}
                            data-llp-delay={750}
                            fillOpacity={0}
                        />
                        <path
                            className="prefix__cls-1"
                            d="M922.94 414.67L557.4 149.09c-13.35-9.69-35.19-9.69-48.54 0l-35.38 25.71"
                            data-llp-id="Pentagon_Component-6"
                            data-llp-duration={750}
                            data-llp-delay={750}
                            fillOpacity={0}
                        />
                    </g>
                </g>
            </svg>
        </StyledLoader>
    );
};

export default Loader