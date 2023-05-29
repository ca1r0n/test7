import {ChangeEventHandler, FC, ReactEventHandler, useCallback, useRef, useState} from "react";
import styles from "./AudioPlayer.module.scss"
import {Pause, Play} from "./Icons.tsx";

export interface AudioPlayerProps {
    src?: string
}

export const AudioPlayer: FC<AudioPlayerProps> = (props) => {
    const audioRef = useRef<HTMLMediaElement | null>(null)
    const [isPlay, setIsPlay] = useState(false)
    const [time, setTime] = useState(0)
    const [maxTime, setMaxTime] = useState(0)
    const [volume, setVolume] = useState(1)


    const onDurationChange: ReactEventHandler<HTMLAudioElement> = useCallback((e) => {
        setMaxTime(e.currentTarget.duration)
    }, [])

    const onPlay = useCallback(() => {
        setIsPlay(true)
    }, [])

    const onPause = useCallback(() => {
        setIsPlay(false)
    }, [])

    const pause = useCallback(() => {
        audioRef.current?.pause()
    }, [audioRef])

    const play = useCallback(() => {
        audioRef.current?.play()
    }, [audioRef])

    const onTimeUpdate: ReactEventHandler<HTMLAudioElement> = useCallback((e) => {
        setTime(e.currentTarget.currentTime)
    }, [])

    const onVolumeChange: ReactEventHandler<HTMLAudioElement> = useCallback((e) => {
        setVolume(e.currentTarget.volume)
    }, [])

    const onChangeTime: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        if (!audioRef || !audioRef.current) return;

        audioRef.current.currentTime = Number(e.currentTarget.value)
    }, [audioRef])

    const onChangeVolume: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        if (!audioRef || !audioRef.current) return;

        audioRef.current.volume = Number(e.currentTarget.value)
    }, [audioRef])

    return <div className={styles.player}>
        <audio
            ref={audioRef}
            src={props.src}
            onPlay={onPlay}
            onPause={onPause}
            onTimeUpdate={onTimeUpdate}
            onVolumeChange={onVolumeChange}
            onDurationChange={onDurationChange}
        />
        <div className={styles.box}>
            <div
                className={styles.controller}
                onClick={isPlay ? pause : play}
            >
                {isPlay ? <Pause/> : <Play/>}

            </div>
            <input
                className={styles.track}
                type="range"
                min="0"
                max={maxTime || 0}
                value={time}
                onChange={onChangeTime}
            />
            <div className={styles.bottomBox}>
                <div className={styles.time}>{second2time(time)}</div>
                <input
                    className={styles.volumes}
                    type="range"
                    min="0"
                    max="1"
                    step={0.01}
                    value={volume}
                    onChange={onChangeVolume}
                />
            </div>
        </div>
    </div>
}

function second2time(second: number): string {
    return `${withZeros(Math.round((second / 60)))}:${withZeros(Math.round(second % 60))}`
}

function withZeros(number: number): string {
    if (number < 10) {
        return `0${number}`
    }
    return String(number)
}

