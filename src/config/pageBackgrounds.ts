import type { HyperspeedOptions } from '@/components/react-bits/Hyperspeed'
import { hyperspeedPresets } from '@/components/react-bits/HyperSpeedPresets'

export const experienceHyperspeed = {
  ...hyperspeedPresets.one,
  colors: {
    ...hyperspeedPresets.one.colors,
    background: 0x050508,
    roadColor: 0x08080c,
    islandColor: 0x0a0a10,
    leftCars: [0xf472b6, 0x7c3aed, 0xc247ac],
    rightCars: [0x22d3ee, 0x7c3aed, 0x5227ff],
    sticks: 0x22d3ee,
  },
} as unknown as Partial<HyperspeedOptions>

export const homeOrb = {
  hue: 20,
  hoverIntensity: 0.48,
  rotateOnHover: true,
  backgroundColor: '#050508',
}

export const homeLiquidEther = {
  colors: ['#22d3ee', '#7c3aed', '#f472b6'],
  mouseForce: 22,
  cursorSize: 110,
  resolution: 0.5,
  autoDemo: true,
  autoSpeed: 0.45,
  autoIntensity: 2,
}

export const defaultLiquidEther = homeLiquidEther
