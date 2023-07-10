import { useState } from 'react'
import { Wrapper, ButtonLeft, ButtonRight, Value, Plus, Minus } from './CounterStyles'

const Counter = ({ currentValue = 0 }) => {
  const [amount, setAmount] = useState(currentValue)

  return (
    <Wrapper>
      <ButtonLeft onClick={() => setAmount(prev => (prev === 0 ? prev : prev - 1))}>
        <Minus />
      </ButtonLeft>
      <Value>{amount}</Value>
      <ButtonRight onClick={() => setAmount(prev => (prev === 10 ? prev : prev + 1))}>
        <Plus />
      </ButtonRight>
    </Wrapper>
  )
}

export default Counter
