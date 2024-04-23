import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string,
    onClick: (page: string) => void ,
    selected: boolean
}

const Link = ({page, onClick, selected} : Props) => {
    const loweCasePageName = page.toLowerCase().replace(' ','');
  return (
    <AnchorLink
        className= {`${selected && 'text-primary-500'} transition duration-500 hover:text-primary-300`}
        href={`#${loweCasePageName}`}
        onClick={() => onClick(page)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link