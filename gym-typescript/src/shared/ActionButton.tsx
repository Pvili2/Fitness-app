import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    type: "primary" | "secondary",
    children: React.ReactNode,
    to: string
}

const ActionButton = ({type, children, to}: Props) => {
    const buttonStyle = type === "primary" ? "bg-secondary-500 text-white px-10 py-2 hover:bg-primary-500 rounded-md" : "";
  return (
    <AnchorLink href={`#${to}`}  className={`${buttonStyle}`}>{children}</AnchorLink>
  )
}

export default ActionButton