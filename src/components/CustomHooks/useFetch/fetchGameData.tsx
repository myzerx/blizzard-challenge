import { useEffect, useState } from 'react'
import axios from 'axios'

export function useGameData() {
  const [gameData, setGameData] = useState<any[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://api.brchallenges.com/api/blizzard/games',
        )

        setGameData(response.data)
      } catch (error) {
        console.error('Error fetching api game data:', error)
        setGameData([])
      }
    }

    fetchData()
  }, [])

  return gameData
}
