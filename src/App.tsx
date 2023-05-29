import {InputWithHistory} from "./components";
import {useCallback, useState} from "react";

const initValue = "https://"

function App() {
    const [history, setHistory] = useState<Array<string>>([])
    const [error, setError] = useState<string | undefined>(undefined)

    const addHistory = useCallback((value: string) => {
        if (!value || value == initValue) {
            setError("Invalid address")
            return
        }

        setHistory(prev => {
            const index = prev.indexOf(value)
            if (index == -1) {
                return [value, ...prev]
            }

            return [value, ...prev.slice(0, index), ...prev.slice(index+1)]
        })
    }, [])

    const onChose = useCallback((value: string) => {
        addHistory(value)
    }, [addHistory])

    const onChange = useCallback(() => {
        if (error) {
            // reset error
            setError(undefined)
        }
    }, [error])

    return (
        <>
            <InputWithHistory
                initValue={initValue}
                onChose={onChose}
                onChange={onChange}
                select={history}
                errorMessage={error}
            />
        </>
    )
}

export default App
