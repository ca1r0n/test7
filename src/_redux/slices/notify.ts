import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export enum NotifyType {
    WARNING
}

export type Notify = {
    id: string
    type: NotifyType
    title: string;
    description: string;
}

interface State {
    notifies: Notify[];
}

const initialState: State = {
    notifies: [
        {
            type: NotifyType.WARNING,
            title: "Test",
            description: "Test notify, close it!",
            id: Math.random().toString(),
        },
    ]
};

export const notifySlice = createSlice({
    name: 'notify',
    initialState,
    reducers: {
        ADD_NOTIFY: (state: State, action: PayloadAction<Notify>) => {
            state.notifies.unshift(action.payload);
        },
        REMOVE_NOTIFY: (state: State, action: PayloadAction<string>) => {
            state.notifies = state.notifies.filter(notify => notify.id != action.payload)
        }
    },
});