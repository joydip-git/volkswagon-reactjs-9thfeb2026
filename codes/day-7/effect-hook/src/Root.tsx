import { useState } from "react"
import SampleCls from "./SampleCls"

const Root = () => {
    const sampleClsObj = new SampleCls({ message: 'Welcome to class component' })
    const sampleClsDesign = sampleClsObj.render()

    const fnCompDesign = FnComp({ data: 100 })
    return (
        <div>
            {/* <SampleCls message='Welcome to class component' /> */}
            {/* <FnComp /> */}
            {
                sampleClsDesign
            }
            <br />
            {
                fnCompDesign
            }
        </div>
    )
}

type FnCompStateType = {
    value: number,
    name: string
}
type FnCompPropType = {
    data: number
}
function FnComp(props: Readonly<FnCompPropType>) {
    // const [value, setValue] = useState<number>(0)
    // const [name, setName] = useState<string>('anil')
    const [state, setState] = useState<FnCompStateType>({ name: '', value: 0 })
    return <div>
        Functional Component
        <br />
        <span>Data: &nbsp;{props.data}</span>
        <br />
        <span>Value: &nbsp;{state.value}</span>
    </div>
}

export default Root