import * as React from 'react'
import styled from 'styled-components'

const variables = {
  color: '#0062ff',
  crossSize: 7
}

const HeaderButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`
const TextButton = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 12px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${variables.color};
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`
const Cross = styled.div`
  width: ${variables.crossSize}px;
  height: ${variables.crossSize}px;
  :before,
  :after {
    position: absolute;
    left: 2px;
    content: '';
    height: ${variables.crossSize}px;
    width: 1px;
    background-color: ${variables.color};
  }
  :before {
    transform: rotate(90deg);
  }
  :after {
    transform: rotate(180deg);
  }
`

const HeaderButton = () => {
  return (
    <HeaderButtonWrapper>
      <TextButton>
        <Cross />
        <span>Add new team</span>
      </TextButton>
    </HeaderButtonWrapper>
  )
}

export default HeaderButton