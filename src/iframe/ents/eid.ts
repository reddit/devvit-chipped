declare const eid: unique symbol
export type EID = number & {[eid]: never}

export class EIDFactory {
  #eid: EID = 0 as EID
  new = (): EID => ++this.#eid as EID
}
