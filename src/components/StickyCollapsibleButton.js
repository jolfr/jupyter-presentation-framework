import React from 'react'

export default function StickyCollapsibleButton({isActive, handleClick, label}) {
  if (isActive) {
    return(
      <button
        onClick={() => handleClick()}
        style={{
          width: '100%',
          backgroundColor: 'white',
          color: 'black'
        }}
      >
        <div style={{
          color: 'black'
        }}>
          {label}
        </div>
      </button>
      )

  } else {
    return (
      <button
        onClick={() => handleClick()}
        style={{
          width: '100%'
        }}
      >
        <div>
          {label}
        </div>
      </button>
    )
  }

}