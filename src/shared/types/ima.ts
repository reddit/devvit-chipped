declare const ima: unique symbol
export type IMA = string & {readonly [ima]: never}
