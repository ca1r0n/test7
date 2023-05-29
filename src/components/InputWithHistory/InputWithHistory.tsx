import {ChangeEvent, FC, useCallback, useRef, useState} from "react";
import styles from "./InputWithHistory.module.scss"
import {useOutside} from "../../hooks";

export interface InputWithHistoryProps {
    errorMessage?: string
    onChose?: (value: string) => void
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    initValue?: string;
    placeholder?: string
    select?: string[];
}

export const InputWithHistory: FC<InputWithHistoryProps> = (props) => {
    const refInput = useRef<HTMLInputElement | null>(null)
    const refBlock = useRef<HTMLDivElement | null>(null)
    const [isFocus, setIsFocus] = useState(true)

    const onFocus = useCallback(() => setIsFocus(true), [])
    const onBlur = useCallback(() => setIsFocus(false), [])

    useOutside(refBlock, () => {
        onBlur()
    })

    const resetInput = useCallback(() => {
        if (!refInput.current) return;

        refInput.current.value = props.initValue || ""
    }, [refInput, props.initValue])

    const onClick = useCallback(() => {
        if (!refInput) return;

        if (!refInput.current) return;

        props.onChose?.(refInput.current?.value)
        resetInput()
        onBlur()
    }, [props, refInput])

    const onSelectClick = useCallback((value: string) => () => {
        props.onChose?.(value)
        resetInput()
        onBlur()
    }, [props])

    return <div ref={refBlock} className={styles.box}>
        <div className={styles.bigBox}>
            <div className={styles.inputBox}>
                <input
                    onFocus={onFocus}
                    defaultValue={props.initValue}
                    placeholder={props.placeholder}
                    ref={refInput}
                    onChange={props.onChange}
                    type="text"
                    className={styles.input}
                />
                {(isFocus && props.select && props.select.length != 0) &&
                    <div className={styles.select}>
                        {props.select.map((value, index) => {
                            return <div
                                key={index}
                                className={styles.item}
                                onClick={onSelectClick(value)}
                            >
                                {value}
                            </div>
                        })}
                    </div>
                }
            </div>
            <button
                className={styles.btn}
                onClick={onClick}>
                <Arrow/>
            </button>
        </div>
        {props.errorMessage && <div className={styles.error}>{props.errorMessage}</div>}
    </div>
}

function Arrow() {
    return <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M39.7197 18.6944C40.0934 18.307 40.0934 17.6932 39.7197 17.3057L23.7197 0.72174L23.0253 0.0020752L21.586 1.39072L22.2803 2.11038L36.6457 17H1H0V19H1H36.6457L22.2803 33.8897L21.586 34.6094L23.0253 35.998L23.7197 35.2784L39.7197 18.6944Z"
              fill="#1B191C"/>
    </svg>
}