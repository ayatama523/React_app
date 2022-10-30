import React, {useState, useEffect} from 'react';

export const ToggleButton = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  useEffect(() => {
    console.log('Current state is', open)
    if (open) {
      console.log('Subscribe database...')
    }
    // クリーンアップ関数は再レンダリングされる前に呼び出される
    return () => {
      console.log('Unsubscribe detabase!')
    }
  })

  return (
    <button onClick={toggle}>
      {open ? 'OPEN': 'CLOSE'}
    </button>
  );
};