import React from 'react'

export default function StickyCollapsibleButton({isActive, handleClick, label}) {
  if (isActive) {
    return(
      <button
        style={{
          width: '100%',
          backgroundColor: '#1b1f22',
          alignItems: 'space-between'
        }}
      >
        <div>
          <button
            className={'button button-icon'}
          >PREV</button>
          {label}
          <button
            className={'button button-icon'}
          >NEXT</button>
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