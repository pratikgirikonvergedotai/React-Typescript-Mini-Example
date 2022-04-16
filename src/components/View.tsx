import React, { useState } from "react";


// defining type of props using Type from typescript
type propsInput = {
    name: string
}

// component returns jsx element 
// props return type define above
export function View(props: propsInput):JSX.Element{
    // useState can use or return two values via Generics or casting . which are string and null 
    const [state, setState] = useState<string | null>(() => {
        // return a callback so that it is not compute hungry. 
        // same in onclick event below . which is proper way 
        return null
    })

    return (
        <div>
            <h1>Change name between Tony and Bruce</h1>
            <h2>Hi {state}</h2>
            <button onClick={() => setState("Tony")}>Tony</button>
            <button onClick={() => setState("Bruce")}>Bruce</button>
        </div>
    )
}