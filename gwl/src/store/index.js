import { configureStore } from "@reduxjs/toolkit"

import loginSlice from "../store/slices/LoginSice"
import snackbarSlice from "../store/slices/SnackBarSlice"



const store = configureStore({

    reducer: {

        login: loginSlice,
        snackBar:snackbarSlice
    }

})




export default store