import {writable} from "svelte/store"

export const surahs:any = writable ([])
export const arrSurahs:any = writable ([])
export const audioSource:any = writable ([])
export const bookmarked :any = writable ([])
export const idAyat  = writable(0)
export const doaHarian:any = writable([])
export const doaHarianFilter:any = writable([])
export const doaFull:any = writable({})
export const fromBookmark = writable(false)