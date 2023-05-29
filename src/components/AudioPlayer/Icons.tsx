import {memo} from "react";

export const Play = memo(function Play() {
    return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 40V0H4.34286L40 18.7952V20.9639L4.34286 40H0Z" fill="white"/>
    </svg>
})

export const Pause = memo(function Pause() {
    return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" width="4" height="40" fill="white"/>
        <rect x="32" width="4" height="40" fill="white"/>
    </svg>
})