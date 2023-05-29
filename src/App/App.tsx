import {AudioPlayer, InputWithSelect, Notify} from "../components";
import {useCallback, useState} from "react";
import styles from "./App.module.scss"
import classNames from "classnames";
import {AddAndRemoveNotify, NotifyType, useAppDispatch} from "../_redux";
import {useHistory} from "./useHistory.ts";

const initValue = "https://"

function addressIsValid(address: string): boolean {
    return !address || address == initValue
}

async function checkSrcIsAvailable(src: string): Promise<boolean> {
    let resp;
    try {
        resp = await fetch(src, {
            method: 'HEAD'
        })
    } catch (e) {
        return false
    }
    return resp.ok
}

function App() {
    const dispatch = useAppDispatch()

    const [error, setError] = useState<string | undefined>(undefined)
    const [currentAudio, setCurrentAudio] = useState<string | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const {history, addHistory} = useHistory()

    const onChose = useCallback(async (value: string) => {
        setIsLoading(true)
        try {
            if (addressIsValid(value)) {
                setError("Invalid address")
                dispatch(AddAndRemoveNotify({
                    title: "Error",
                    description: "Invalid address",
                    type: NotifyType.WARNING,
                }))
                return
            }

            if (!(await checkSrcIsAvailable(value))) {
                setError("Invalid address")
                dispatch(AddAndRemoveNotify({
                    title: "Not available",
                    description: "Сannot establish a connection. Try another link",
                    type: NotifyType.WARNING,
                }))
                return
            }
        } finally {
            // блесрнг хочу defer из go
            setIsLoading(false)
        }

        addHistory(value)
        setCurrentAudio(value)
    }, [addHistory, dispatch])

    const onChange = useCallback(() => {
        if (error) {
            // reset error
            setError(undefined)
        }
    }, [error])

    const onBack = useCallback(() => {
        // reset current audio
        setCurrentAudio(undefined)
    }, [])

    return (
        <>
            {currentAudio ?
                <div className={styles.audioBox}>
                    {/* TODO: To btn*/}
                    <p className={classNames(styles.onBack, "intro__insert")} onClick={onBack}>← Back</p>
                    <AudioPlayer src={currentAudio}/>
                </div> :
                <div>
                    <p className="intro__insert">Insert the link</p>
                    <InputWithSelect
                        disabled={isLoading}
                        initValue={initValue}
                        onChose={onChose}
                        onChange={onChange}
                        select={history}
                        error={error}
                    />
                </div>}
            <Notify/>
        </>
    )
}

export default App
