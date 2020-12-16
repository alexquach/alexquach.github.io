import { React, useEffect, useState } from "react"
import downArrowStyles from "./DownArrow.module.css"
import { css } from "@emotion/core"

export default function DownArrow({ children }) {

    const [hovered, setHover] = useState(false)

    function setHoverThing(x) {
        console.log(x)
        setHover(x)
    }

    return (
        <div onMouseEnter={()=>setHoverThing(true)} onMouseLeave={()=>setHoverThing(false)}
            className={
                downArrowStyles.scrollDownArrow + ` ` + 
                downArrowStyles.scrollLink}
            css={css`opacity: 1`}
        >
            <div className={hovered
                ? downArrowStyles.arrowLineshover + ` ` + downArrowStyles.arrowLines1hovered
                : downArrowStyles.arrowLines + ` ` + downArrowStyles.arrowLines1} />
            
            <div className={hovered
                ? downArrowStyles.arrowLineshover + ` ` + downArrowStyles.arrowLines2hovered
                : downArrowStyles.arrowLines + ` ` + downArrowStyles.arrowLines2} />
            
            <div 
                className={hovered 
                    ? downArrowStyles.downArrowLine + ` ` + downArrowStyles.downArrowLineanimated
                    : downArrowStyles.downArrowLine
            }/>

        </div>
    )
}