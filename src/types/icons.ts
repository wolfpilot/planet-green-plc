export enum IconTypesEnum {
  // Info
  Email = "email",
  // Social
  Facebook = "facebook",
  LinkedIn = "linkedin",
  Twitter = "twitter",
  YouTube = "youtube",
}

export interface Icon extends React.SVGAttributes<SVGElement> {
  className?: string
  width?: number
  height?: number
  color?: string
}
