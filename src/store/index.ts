import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
    boardSize:number;
    board: string[];
} = {
    boardSize: 8,
    board:[]
}

const candyCrushSlice = createSlice({
    name : 'candyCrush',
    initialState,
    reducers :{
        updateBoard : (state, action : PayloadAction<string[]>) => {
            state.board = action.payload;
        }
    },
});

export const store = configureStore({
    reducer:{
        candyCrush: candyCrushSlice.reducer
    }
})

export const {updateBoard} = candyCrushSlice.actions 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;