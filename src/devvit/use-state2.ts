import {
  type JSONValue,
  type PartialJSONValue,
  type UseStateInitializer,
  type UseStateResult,
  useState
} from '@devvit/public-api'

// to-do: can we be more permissive with undefined without breaking the typing
//        meaningfully? need to think about this more and typing needs to be
//        better. apply to all APIs.
//        one consequence the docs don't mention is JSON.parse() of the
//        resultant stringified:
//          `JSON.stringify([1, 2, undefined, 3])`
//          `'[1,2,null,3]'`
//          `[1,2,null,3]`
//        which is no longer a number[].
//        need to update all the inteferrence unit tests in public API and see
//        how it pans out.
export function useState2(
  // biome-ignore lint/suspicious/noConfusingVoidType:
  init: UseStateInitializer<void | null>
): UseStateResult<boolean>
export function useState2(
  init: UseStateInitializer<boolean>
): UseStateResult<boolean>
export function useState2(
  init: UseStateInitializer<number>
): UseStateResult<number>
export function useState2(
  init: UseStateInitializer<string>
): UseStateResult<string>
export function useState2<S>(
  init: UseStateInitializer<S & PartialJSONValue>
): UseStateResult<S>
export function useState2<S>(
  init: UseStateInitializer<Promise<S & PartialJSONValue>>
): UseStateResult<S>
export function useState2<S extends JSONValue>(
  init: UseStateInitializer<S>
): UseStateResult<S> {
  return useState(init)
}

declare module '@devvit/public-api/types/web-view-ui-client.ts' {
  interface WebViewUIClient {
    postMessage<T extends PartialJSONValue>(id: string, message: T): void
  }
}
