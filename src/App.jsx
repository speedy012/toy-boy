import { useState, useEffect } from 'react'
import './App.css'

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']

function App() {
  const [robot, setRobot] = useState({ x: null, y: null, facing: 0 })

  const placeRobot = () => {
    setRobot({ x: 0, y: 0, facing: 0 })
  }

  const moveRobot = () => {
    if (robot.x === null || robot.y === null) return
    let { x, y } = robot
    switch (directions[robot.facing]) {
      case 'NORTH':
        if (y < 4) y++
        break
      case 'EAST':
        if (x < 4) x++
        break
      case 'SOUTH':
        if (y > 0) y--
        break
      case 'WEST':
        if (x > 0) x--
        break
      default:
        break
    }
    setRobot({ ...robot, x, y })
  }

  const turnLeft = () => {
    if (robot.x === null || robot.y === null) return
    setRobot({ ...robot, facing: (robot.facing + 3) % 4 })
  }

  const turnRight = () => {
    if (robot.x === null || robot.y === null) return
    setRobot({ ...robot, facing: (robot.facing + 1) % 4 })
  }

  const reportPosition = () => {
    if (robot.x === null || robot.y === null) return
    alert(`Output: ${robot.x},${robot.y},${directions[robot.facing]}`)
  }

  const updateRobotPosition = () => {
    let cells = document.querySelectorAll('.cell')
    cells.forEach((cell) => {
      cell.textContent = ''
      cell.style.backgroundColor = '#f0f0f0'
    })

    if (robot.x !== null && robot.y !== null) {
      const cell = document.querySelector(`.cell[data-x="${robot.x}"][data-y="${robot.y}"]`)
      cell.textContent = '🤖'
      cell.style.backgroundColor = '#add8e6'
    }
  }

  useEffect(updateRobotPosition, [robot])

  return (
    <div className="App">
      <div id="table">
        {Array.from({ length: 5 }, (_, i) =>
          Array.from({ length: 5 }, (_, j) => (
            <div data-testid={`cell-%{j}-${4 - i}`} key={`${i}-${j}`} className="cell" data-x={j} data-y={4 - i}></div>
          )),
        )}
      </div>
      <div id="controls">
        <button onClick={placeRobot}>PLACE</button>
        <button onClick={moveRobot}>MOVE</button>
        <button onClick={turnLeft}>LEFT</button>
        <button onClick={turnRight}>RIGHT</button>
        <button onClick={reportPosition}>REPORT</button>
      </div>
    </div>
  )
}

export default App
