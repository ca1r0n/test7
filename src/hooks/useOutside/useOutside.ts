import {RefObject, useEffect} from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutside(ref: RefObject<HTMLElement>, func: () => void) {
    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (ref && ref.current && ref.current.contains(event.target as Node)) {
                return
            }
            func()
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}