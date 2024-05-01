import { render, screen } from '@testing-library/react'

import { Footer } from '../../src/Components/Footer'

describe('Footer component tests', () => {
  beforeEach(() => {})

  afterEach(() => {})

  it('Renders correctly initial document', async () => {
    render(<Footer />)
    const footerLabel = screen.getByText('Footer')

    expect(footerLabel).toBeInTheDocument()
  })
})
