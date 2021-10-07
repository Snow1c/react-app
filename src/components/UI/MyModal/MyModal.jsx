import React from 'react'
import classes from './MyModal.module.css'
import GlassEffect from '../../GlassEffect'

export default function MyModal({ children, visible, setVisible }) {

  const rootClasses = [classes.myModal]
  if (visible) {
    rootClasses.push(classes.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={(e) => setVisible(false)}>
      {/* <div className={classes.myModal}> */}
      <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
