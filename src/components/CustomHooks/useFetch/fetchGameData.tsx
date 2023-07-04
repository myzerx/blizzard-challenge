import { useEffect, useState } from 'react'
import axios from 'axios'

export function useGameData() {
  const [gameData, setGameData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://api.brchallenges.com/api/blizzard/games',
        )

        setGameData(response.data)
      } catch (error) {
        console.error('Error fetching game data:', error)
        setGameData(null)
      }
    }

    fetchData()
  }, [])

  return gameData
}
