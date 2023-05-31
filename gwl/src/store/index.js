import { configureStore } from "@reduxjs/toolkit"

import loginSlice from "../store/slices/LoginSice"
import snackbarSlice from "../store/slices/SnackBarSlice"



const store = configureStore({

    reducer: {

        login: loginSlice,
        setSnackBar:snackbarSlice
    }

})




export default store