import {memo} from "react";

export const Close = memo(function Close() {
    return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
            <path d="M25 7L7 25" stroke="#767577" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M7 7L25 25" stroke="#767577" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
        </g>
    </svg>
})

export const Warning = memo(function Warning() {
    return <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.96002 14.008L0.488022 14.008L0.488022 16L2.96002 16L2.96002 14.008ZM2.69602 0.039999L0.776023 0.0399988L0.776022 12.04L2.69602 12.04L2.69602 0.039999Z"
            fill="black"/>
    </svg>
})