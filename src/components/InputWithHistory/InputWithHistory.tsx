import {ChangeEvent, FC, useCallback, useRef, useState} from "react";
import styles from "./InputWithHistory.module.scss"
import {useOutside} from "../../hooks";
import {Arrow, Warning} from "./Icons.tsx";
import * as classNames from "classnames";

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
                    className={classNames(styles.input, props.errorMessage ? styles.errorInput : "")}
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
                {props.errorMessage && <div className={styles.errorImage}><Warning/></div>}
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

