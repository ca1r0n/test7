import {AudioPlayer, InputWithHistory} from "./components";
import {useCallback, useState} from "react";
import styles from "./App.module.scss"
import * as classNames from "classnames";

const initValue = "https://"

function addressIsValid(address: string): boolean {
    return !address || address == initValue
}

function App() {
    const [history, setHistory] = useState<Array<string>>([])
    const [error, setError] = useState<string | undefined>(undefined)
    const [currentAudio, setCurrentAudio] = useState<string | undefined>(undefined)

    const addHistory = useCallback((value: string) => {
        setHistory(prev => {
            const index = prev.indexOf(value)
            if (index == -1) {
                return [value, ...prev]
            }

            return [value, ...prev.slice(0, index), ...prev.slice(index + 1)]
        })
    }, [])

    const onChose = useCallback((value: string) => {
        if (addressIsValid(value)) {
            setError("Invalid address")
            return
        }

        addHistory(value)
        setCurrentAudio(value)
    }, [addHistory])

    const onChange = useCallback(() => {
        if (error) {
            // reset error
            setError(undefined)
        }
    }, [error])

    const onBack = useCallback(() => {
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
                    <InputWithHistory
                        initValue={initValue}
                        onChose={onChose}
                        onChange={onChange}
                        select={history}
                        errorMessage={error}
                    />
                </div>}


        </>
    )
}

export default App
