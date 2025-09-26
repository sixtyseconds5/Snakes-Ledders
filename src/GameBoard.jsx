import React, { useState } from 'react'

const SIZE = 30

export default function GameBoard() {
  const [position, setPosition] = useState(1)
  const [dice, setDice] = useState(null)
  const [rolling, setRolling] = useState(false)

  const ladders = { 3: 15, 8: 12 }
  const snakes = { 18: 6, 24: 10 }

  const rollDice = () => {
    setRolling(true)
    let roll = Math.floor(Math.random() * 6) + 1
    setTimeout(() => {
      setDice(roll)
      let next = position + roll
      if (ladders[next]) next = ladders[next]
      if (snakes[next]) next = snakes[next]
      if (next > SIZE) next = SIZE
      setPosition(next)
      setRolling(false)
    }, 800)
  }

  return (
    <div
      className="p-4 rounded-xl shadow-lg"
      style={{
        backgroundImage: 'url(/assets/background.jpg)',
        backgroundSize: 'cover'
      }}
    >
      <div className="grid grid-cols-6 gap-1 mb-6">
        {Array.from({ length: SIZE }, (_, i) => {
          const tile = SIZE - i
          const isPlayer = position === tile
          const isEnd = tile === SIZE
          const isSnake = Object.keys(snakes).includes(tile.toString())
          const isLadder = Object.keys(ladders).includes(tile.toString())

          return (
            <div
              key={tile}
              className={`relative w-12 h-12 flex items-center justify-center rounded-md border 
                ${isEnd ? 'bg-yellow-500' : 'bg-white/20'} 
                ${isPlayer ? 'border-4 border-green-400' : 'border-white/40'}`}
            >
              {isSnake && (
                <img src="/assets/snake.png" alt="snake" className="absolute inset-0" />
              )}
              {isLadder && (
                <img src="/assets/ladder.png" alt="ladder" className="absolute inset-0" />
              )}
              {isPlayer ? (
                <img src="/assets/coin.png" alt="player" className="w-6 h-6 z-10" />
              ) : (
                <span className="text-xs">{tile}</span>
              )}
            </div>
          )
        })}
      </div>

      <p className="mb-2">🎲 Dice: {dice ?? '-'}</p>
      <p className="mb-4">📍 Position: {position}</p>

      {position < SIZE ? (
        <button
          onClick={rollDice}
          disabled={rolling}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-80 disabled:opacity-40"
        >
          {rolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      ) : (
        <p className="text-xl font-bold text-green-400 animate-bounce">
          🏆 Congratulations, you win!
        </p>
      )}
    </div>
  )
}
