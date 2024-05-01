import { render, screen } from '@testing-library/react'

import { App } from '../../src/Components/App/index.tsx'

describe('App component tests', () => {
  beforeEach(() => {})

  afterEach(() => {})

  it('Renders correctly initial document', async () => {
    render(<App />)
    const headerLabel = screen.getByText('Header')

    expect(headerLabel).toBeInTheDocument()
  })
})
