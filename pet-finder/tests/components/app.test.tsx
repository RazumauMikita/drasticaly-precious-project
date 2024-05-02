import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { App } from '../../src/Components/App/index.tsx'

describe('App component tests', () => {
  beforeEach(() => {})

  afterEach(() => {})

  it('Renders correctly initial document', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const headerLabel = screen.getByText('Header')

    expect(headerLabel).toBeInTheDocument()
  })
})
