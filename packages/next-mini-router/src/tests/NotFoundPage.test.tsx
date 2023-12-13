import * as ReactTestRenderer from 'react-test-renderer'
import { expect, it } from '@jest/globals'
import { NotFoundPage } from '../page/NotFoundPage.tsx'

it('should render correctly', () => {
  const tree = ReactTestRenderer.create(
    <NotFoundPage/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
