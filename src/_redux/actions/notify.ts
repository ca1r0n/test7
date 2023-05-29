import {Notify, notifySlice} from "../slices";
import {AppDispatch} from "../store.ts";

export const AddAndRemoveNotify = (notify: Omit<Notify, "id">, ttl = 5000) => (dispatch: AppDispatch) => {
    const id = Math.random().toString()
    dispatch(notifySlice.actions.ADD_NOTIFY({
        ...notify,
        id: id,
    }))

    setTimeout(() => {
        dispatch(notifySlice.actions.REMOVE_NOTIFY(id))
    }, ttl)
}

export const RemoveNotify = (id: string) => (dispatch: AppDispatch) => {
    dispatch(notifySlice.actions.REMOVE_NOTIFY(id))
}