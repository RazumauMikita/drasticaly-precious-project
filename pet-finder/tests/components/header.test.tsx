import { render, screen } from '@testing-library/react'

import { Header } from '../../src/Components/Header'

describe('Header component tests', () => {
  beforeEach(() => {})

  afterEach(() => {})

  it('Renders correctly initial document', async () => {
    render(<Header />)
    const headerLabel = screen.getByText('Header')

    expect(headerLabel).toBeInTheDocument()
  })
})
