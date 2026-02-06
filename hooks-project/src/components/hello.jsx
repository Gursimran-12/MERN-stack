import React, {memo} from 'react'

const HelloWorld = () => {
  console.log("Rendered!")
  return (
    <div>Hello World</div>
  )
}

export default memo(HelloWorld)