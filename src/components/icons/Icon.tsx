// Types
import { IconTypesEnum, Icon } from "@ts/icons"

// Components
import Facebook from "./Facebook"
import LinkedIn from "./LinkedIn"
import Twitter from "./Twitter"
import YouTube from "./YouTube"

const Icon: React.FC<Icon> = ({ type, ...props }) => {
  switch (type) {
    // Social
    case IconTypesEnum.Facebook:
      return <Facebook {...props} />
    case IconTypesEnum.LinkedIn:
      return <LinkedIn {...props} />
    case IconTypesEnum.Twitter:
      return <Twitter {...props} />
    case IconTypesEnum.YouTube:
      return <YouTube {...props} />
    default:
      throw new Error(`Icon type ${type} not found.`)
  }
}

export default Icon
