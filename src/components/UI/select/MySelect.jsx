import React from 'react'
import classes from './MySelect.module.css'

export default function MySelect({ options, defaultValue, value, selectSortKind, ...props }) {
  return (
    <select className={classes.MySelect}
      value={props.selectValue}
      onChange={event => selectSortKind(event.target.value)}
      defaultValue={defaultValue}
    >
      <option disabled>{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name} &darr;
        </option>
      )}
    </select>
  )
}
