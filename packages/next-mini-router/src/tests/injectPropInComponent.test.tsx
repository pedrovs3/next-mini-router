import { expect, it } from '@jest/globals'
import { injectPropInComponent } from '../utils'

it('should render correctly', () => {
  const props = {
    primary_color: '#000'
  }

  const component = injectPropInComponent([(<div key={1}>teste</div>)], props)

  expect(component?.[0]?.props).toMatchObject(props)
})
