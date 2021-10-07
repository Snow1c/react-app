import React from 'react'
import classes from './Loader.module.css'

export default function Loader() {
  return (
    <div className={classes.loader}>
      <div className={classes.circle}>
        <div className={classes.innerCircle}></div>
      </div>
    </div>
  )
}
