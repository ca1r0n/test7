import {ChangeEvent, FC, useCallback, useRef, useState} from "react";
import styles from "./InputWithSelect.module.scss"
import {useOutside} from "../../hooks";
import {Arrow, Warning} from "./Icons.tsx";
import classNames from "classnames";

export interface InputWithSelectProps {
    error?: string
    onChose?: (value: string) => void
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    initValue?: string;
    placeholder?: string
    select?: string[];
    disabled?: boolean;
}

export const InputWithSelect: FC<InputWithSelectProps> = (props) => {
    const refInput = useRef<HTMLInputElement | null>(null)
    const refBlock = useRef<HTMLDivElement | null>(null)
    const [isFocus, setIsFocus] = useState(true)

    const onFocus = useCallback(() => setIsFocus(true), [])
    const onBlur = useCallback(() => setIsFocus(false), [])

    useOutside(refBlock, () => {
        onBlur()
    })

    const onClick = useCallback(() => {
        if (!refInput) return;

        if (!refInput.current) return;

        props.onChose?.(refInput.current?.value)
        onBlur()
    }, [props, refInput])

    const onSelectClick = useCallback((value: string) => () => {
        props.onChose?.(value)
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
                    className={classNames(styles.input, props.error ? styles.errorInput : "")}
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
                {props.error && <div className={styles.errorImage}><Warning/></div>}
            </div>
            <button
                className={styles.btn}
                onClick={onClick}
                disabled={props.disabled}
            >
                <Arrow/>
            </button>
        </div>
        {<div className={classNames(styles.error, props.error ? styles.errorActive : "")}>{props.error}</div>}
    </div>
}

