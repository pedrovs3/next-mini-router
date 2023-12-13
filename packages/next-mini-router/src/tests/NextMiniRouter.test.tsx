import * as ReactTestRenderer from 'react-test-renderer'
import { expect, it, jest } from '@jest/globals'
import { NotFoundPage } from '../page/NotFoundPage.tsx'
import { NextMiniRouter } from '../NextMiniRouter.tsx'
import { Route } from '../Route.tsx'

jest.mock('next/router', () => ({
  useRouter () {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: ''
    }
  }
}))

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

it('should render correctly', () => {
  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '/',
    query: { routeData: [''] },
    asPath: ''
  }))

  const props = {
    primary_color: '#000'
  }

  const component = ReactTestRenderer.create(
    <NextMiniRouter defaultState={{ ...props }}>
      <Route path={'/'}>
        <NotFoundPage/>
      </Route>
    </NextMiniRouter>
  ).toTree()
  console.log(component)

  expect(component).toMatchSnapshot()
  expect(component?.props?.defaultState).toMatchObject({ ...props })
})
