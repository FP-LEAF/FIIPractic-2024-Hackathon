import { cloneElement, useRef } from "react";

const LayoutEffect = ({ children,
    className,
    isInviewState: { trueState = "", falseState = "" }
}) => {

    const ref = useRef(null)

    return cloneElement(children, {
        ref,
        className: `${children.props.className || ""} ${className || ""} ${1 ? trueState : falseState}`
    })
}

export default LayoutEffect