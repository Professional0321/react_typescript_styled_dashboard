import React from 'react'
import styled from 'styled-components'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'
import ErrorBoundary from 'components/Common/ErrorBoundary'

const Content = React.lazy(() => import('components/Tasks/Content'))

const Wrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`

const Tasks = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <ErrorBoundary>
          <React.Suspense fallback={null}>
            <Content />
          </React.Suspense>
        </ErrorBoundary>
      </Wrapper>
    </>
  )
}

export default Tasks
