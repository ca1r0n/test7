import {memo} from "react";

export const Arrow = memo(function Arrow() {
    return <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M39.7197 18.6944C40.0934 18.307 40.0934 17.6932 39.7197 17.3057L23.7197 0.72174L23.0253 0.0020752L21.586 1.39072L22.2803 2.11038L36.6457 17H1H0V19H1H36.6457L22.2803 33.8897L21.586 34.6094L23.0253 35.998L23.7197 35.2784L39.7197 18.6944Z"
              fill="#1B191C"/>
    </svg>
})


export const Warning = memo(function Warning() {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#C6A827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 8V12" stroke="#C6A827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="16" r="0.5" fill="black" stroke="#C6A827"/>
    </svg>
})