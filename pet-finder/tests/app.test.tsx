import { render, screen } from '@testing-library/react'

import App from '../src/App.tsx'

describe('Login component tests', () => {
  beforeEach(() => {})

  afterEach(() => {})

  it('Renders correctly initial document', async () => {
    render(<App />)
    const loginLabel = screen.getByText(
      'Hello World! Test husky pre-commit! Test'
    )

    expect(loginLabel).toBeInTheDocument()
  })
})
