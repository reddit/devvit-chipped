import type {WebViewMessage} from '../shared/types/message.ts'

export function postMessage(msg: WebViewMessage): void {
  parent.postMessage(msg, document.referrer || '*')
}
