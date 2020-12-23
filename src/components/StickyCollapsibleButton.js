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
            className={'button no-border icon fa-fast-backward'}
          />
          <button
            className={'button icon fa-step-backward'}
          />
          {label}
          <button
            className={'button icon fa-step-forward'}
          />
          <button
            className={'button icon fa-fast-forward'}
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