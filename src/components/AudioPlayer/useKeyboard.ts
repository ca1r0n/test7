import {RefObject, useEffect} from "react";

export function useKeyboard(ref: RefObject<HTMLAudioElement>) {
    useEffect(() => {
        if (!ref || !ref.current) return;

        const audio = ref.current

        const func = (e: KeyboardEvent) => {
            e.preventDefault()

            // handler
            switch (e.code) {
                case "Space": {
                    // toggle
                    if (audio.paused) {
                        audio.play()
                    } else {
                        audio.pause()
                    }
                    break
                }
                case "KeyW":
                    // up volume
                    audio.volume = audio.volume + 0.1 > 1 ? 1 : audio.volume + 0.1
                    break
                case "KeyS":
                    // down volume
                    audio.volume = audio.volume - 0.1 < 0 ? 0 : audio.volume - 0.1
                    break
                case "KeyA":
                    // back time
                    audio.currentTime = audio.currentTime - 10 < 0 ? 0 : audio.currentTime - 10
                    break
                case "KeyD":
                    // forward time
                    audio.currentTime = audio.currentTime + 10 > audio.duration ? audio.duration : audio.currentTime + 10
                    break
            }
        }

        document.addEventListener("keypress", func)

        return () => {
            document.removeEventListener("keypress", func)
        }
    }, [ref])
}