export type Route = {
  title: string
  href: string
}
export type RouteGroup = {
  name: string
  children: Routes[]
}

export type Routes = Record<string, Route | Record<string, Route>>
