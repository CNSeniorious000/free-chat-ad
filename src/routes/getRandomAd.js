/** @param { number | null } i */
export function getAd(i = null) {
  i = i === null ? Math.floor(Math.random() * 4) : (i + 1) % 4;

  switch (i ?? Math.floor(Math.random() * 4)) {
    case 0: return { i, type: "ic", href: "https://ic.free-chat.asia/" }
    case 2: return { i, type: "ac", href: "https://accounts.free-chat.asia/" }
    // case 2: return { i, type: "wg", href: "https://group.free-chat.asia/" }
    case 3: return { i, type: "promplate", href: "https://zh.promplate.dev/" }
    case 1: return { i, type: "as", href: "https://anse.free-chat.asia/" }

    default: return { i, type: "ic", href: "https://ic.free-chat.asia/" }
  }
}