import React from 'react'

export default function StickyCollapsibleButton({isActive, handleClick, label}) {
  if (isActive) {
    return(
      <button
        style={{
          width: '100%',
          backgroundColor: '#1b1f22',
        }}
      >
        <div>
          <button
            className={'button icon fa-rocket'}
          />
          {label}
          <button
            className={'button icon fa-play'}
          />
          <button
            className={'button icon fa-forward'}
          />
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