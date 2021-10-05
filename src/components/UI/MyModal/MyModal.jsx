import React from 'react'
import classes from './MyModal.module.css'
import GlassEffect from '../../GlassEffect'

export default function MyModal({ children, visible, setVisible }) {

  const rootClasses = [classes.myModal]
  if (visible) {
    rootClasses.push(classes.active)
  }

  const kDown = (e) => {
    console.log(e)
  }

  return (
    <div className={rootClasses.join(' ')} onKeyDown={kDown} onClick={(e) => setVisible(false)}>
      {/* <div className={classes.myModal}> */}
      <div className={classes.myModalContent} onKeyDown={kDown} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
