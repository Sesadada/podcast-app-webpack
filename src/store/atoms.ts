import { atom } from 'recoil'

export const podcastsAtom = atom<any>({
  key: 'podcastsAtom',
  default: null,
})

export const selectedPodcast = atom<any>({
  key: 'selectedPodcast',
  default: null,
})

export const selectedEp = atom<any>({
  key: 'selectedEp',
  default: null,
})

export const loadingAtom = atom<boolean>({
  key: 'loadingAtom',
  default: true,
})
