import { useState } from "react"

function ExpandableText({children, length = 100}) {
    const [expand, setExpand] = useState(false)
    
    if(children.length <= length) return (<p>{children}</p>)
    else return (
        <p>{expand ? children : `${children.substring(0, length)}...`}<button className="text-primary text-decoration-underline d-block" onClick={() => setExpand(!expand)}>{expand ? "Read Less" : "Read More"}</button></p>
    )
}

export default ExpandableText