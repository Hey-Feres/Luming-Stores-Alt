import React from 'react'
import { Text } from 'atomize'

const Home: React.FC = () => {
  return(
    <Text tag="h1" textSize="display1" textColor="primary" m={{ b: "4rem" }}>
      This is h1 of display1 size
    </Text>
  )
}

export default Home