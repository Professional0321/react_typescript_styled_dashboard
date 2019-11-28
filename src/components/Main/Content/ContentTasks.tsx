import * as React from 'react'
import styled from 'styled-components'
import IconOval from 'components/Common/Icons/Common/Oval'
import AddBigButton from 'components/Common/Buttons/AddBigButton'

const Wrapper = styled.div`
  border: 1px solid #e2e2ea;
  border-radius: 23px;
  margin: 35px 0 20px 0;
  display: flex;
  flex-direction: column;
  padding: 5px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
const TeamsTitle = styled.span`
  font-size: 16px;
  letter-spacing: 0.1px;
  color: #696974;
  padding: 15px 20px;
`
const TeamsMore = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: not-allowed;
  @media (max-width: 450px) {
    display: none;
  }
`
const Teams = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ContentTasks = () => {
  return (
    <Wrapper>
      <Header>
        <TeamsTitle>Tasks</TeamsTitle>
        <TeamsMore>
          <IconOval />
        </TeamsMore>
      </Header>
      <Teams>
        <div>Cards</div>
        <AddBigButton name='Add task' />
      </Teams>
    </Wrapper>
  )
}

export default ContentTasks
