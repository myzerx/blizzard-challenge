import { ContainerIcons, ContainerGrid } from './styles'
import Image from 'next/image'

import diablo4Icon from '../../../public/banner-hero/icons/game-1.png'
import hearthstoneIcon from '../../../public/banner-hero/icons/game-2.png'
import wowIcon from '../../../public/banner-hero/icons/game-3.png'
import diabloIcon from '../../../public/banner-hero/icons/game-4.png'
import starcraftIcon from '../../../public/banner-hero/icons/game-5.png'

export default function GamesIcons() {
  return (
    <ContainerIcons>
      <ContainerGrid>
        <Image src={diablo4Icon} alt="" />
        <Image src={hearthstoneIcon} alt="" />
        <Image src={wowIcon} alt="" />
        <Image src={diabloIcon} alt="" />
        <Image src={starcraftIcon} alt="" />
      </ContainerGrid>
    </ContainerIcons>
  )
}
