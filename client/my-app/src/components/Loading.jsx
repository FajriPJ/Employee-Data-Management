import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  return (
    <CircularProgress disableShrink 
      style={{
        position: "fixed", 
        top: "50%", 
        left: "50%",
        height: "30px",
        width: "30px",
      }}
      />
  )
}
