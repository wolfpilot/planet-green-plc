export type SocialLinks = Record<
  string,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>

export const social: SocialLinks = {
  email: {
    href: "mailto:howl@wolfpilot.co",
    title: "Email",
  },
  facebook: {
    href: "https://www.facebook.com/#",
    title: "Facebook",
  },
  linkedin: {
    href: "https://www.linkedin.com/in/#",
    title: "LinkedIn",
  },
  twitter: {
    href: "https://twitter.com/#",
    title: "Twitter",
  },
  youtube: {
    href: "https://www.youtube.com/#",
    title: "YouTube",
  },
}
