import React from 'react'
import GameBoard from './GameBoard'

export default function App() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">🐍 Crypto Snakes & Ladders</h1>
      <GameBoard />
    </div>
  )
}
