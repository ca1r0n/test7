import {useCallback, useState} from "react";

export function useHistory() {
    const [history, setHistory] = useState<Array<string>>([])

    const addHistory: (v: string) => void = useCallback((value) => {
        setHistory(prev => {
            const index = prev.indexOf(value)
            if (index == -1) {
                return [value, ...prev]
            }

            return [value, ...prev.slice(0, index), ...prev.slice(index + 1)]
        })
    }, [])

    return {history, addHistory}
}