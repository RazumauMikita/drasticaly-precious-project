import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Header } from '../../src/Components/Header'

describe('Header component tests', () => {
  beforeEach(() => {})

  afterEach(() => {})

  it('Renders correctly initial document', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const headerLabel = screen.getByText('Header')

    expect(headerLabel).toBeInTheDocument()
  })
})
