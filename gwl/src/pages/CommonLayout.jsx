import { Grid } from '@mui/material'
import React from 'react'

export const CommonLayout = () => {
  return (
    
    <Grid container >
        <Grid item sm={2.5} sx={{bgcolor:"blue",}}>
            Siderbar
        </Grid>
      <Grid item sm={9.5} sx={{bgcolor:"red"}} >
         Content
      </Grid>
    </Grid>

  )
}
