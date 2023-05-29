import {Notify, notifySlice} from "../slices";
import {AppDispatch} from "../store.ts";

export const AddAndRemoveNotify = (notify: Notify, ttl = 5000) => (dispatch: AppDispatch) => {
    dispatch(notifySlice.actions.ADD_NOTIFY(notify))

    setTimeout(() => {
        dispatch(notifySlice.actions.REMOVE_NOTIFY(notify.id))
    }, ttl)
}

export const RemoveNotify = (id: string) => (dispatch: AppDispatch) => {
    dispatch(notifySlice.actions.REMOVE_NOTIFY(id))
}