import { render, fireEvent, test, expect } from '@testing-library/react'
import App from './App'

test('places the robot at (0, 0) facing NORTH when the place button is clicked', () => {
  const { getByText } = render(<App />)

  fireEvent.click(getByText('Place'))

  expect(getByText('Output: 0,0,NORTH')).toBeInTheDocument()
})

test('moves the robot to (0, 1) facing NORTH when the move button is clicked', () => {
  const { getByText } = render(<App />)

  fireEvent.click(getByText('Place'))
  fireEvent.click(getByText('Move'))

  expect(getByText('Output: 0, 1,NORTH')).toBeInTheDocument()
})
