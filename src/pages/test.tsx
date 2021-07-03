import { render } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should show next title', () => {
    render(<Home />)
  })
})
