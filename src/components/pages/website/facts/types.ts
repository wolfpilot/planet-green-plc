export interface Item {
  amount: {
    value: number
    prefix?: string
    suffix?: string
  }
  description: string
}

export interface Props {
  items: Item[]
}
