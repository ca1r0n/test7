import {FC, useCallback} from "react";
import {Notify as NotifyType, RemoveNotify, useAppDispatch, useAppSelector} from "../../_redux";
import {createPortal} from "react-dom";
import styles from "./Notify.module.scss"
import {Close, Warning} from "./icons.tsx";


const Element: FC<NotifyType & {
    onClose?: () => void
}> = (props) => {
    return <div className={styles.element}>
        <div className={styles.image}><Warning/></div>
        <div className={styles.text}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
        </div>
        <div onClick={props.onClose} className={styles.close}><Close/></div>
    </div>
}

export const Notify: FC = () => {
    const notifyStore = useAppSelector(s => s.notify)
    const dispatch = useAppDispatch()

    const onClose = useCallback((id: string) => () => {
        dispatch(RemoveNotify(id))
    }, [dispatch])

    return createPortal(
        <div className={styles.notifies}>
            {notifyStore.notifies.map((notify) => {
                return <Element
                    key={notify.id}
                    {...notify}
                    onClose={onClose(notify.id)}
                />
            })}
        </div>, document.body)
}

