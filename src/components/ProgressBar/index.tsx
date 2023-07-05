import { ProgressBarContainer } from './styles'

import { useSelector } from 'react-redux'

export function ProgressBar() {
  const selectedId = useSelector((state: any) => state.selectedId)
  const widthPercentage = selectedId * 20 + '%'
  return <ProgressBarContainer css={{ width: widthPercentage }} />
}
