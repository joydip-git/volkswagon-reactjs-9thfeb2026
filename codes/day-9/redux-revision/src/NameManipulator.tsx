import { changeActionCreator } from "./redux/nameslice"
import { useTypedDispatch, useTypedSelector } from "./redux/typedhooks"

const NameManipulator = () => {
    const { name } = useTypedSelector(map => map.nameState)
    const dispatch = useTypedDispatch()

    const nameHandler = (newName: string) => {
        //dispatch({ type:'change', payload:newName})
        const action = changeActionCreator(newName)
        dispatch(action)
    }
    return (
        <div>
            NameManipulator
            <br />
            <div>
                <label htmlFor="txtName">Name: &nbsp;</label>
                <input type="text" id="txtName" value={name}
                    onChange={(e) => nameHandler(e.target.value)} />
            </div>
        </div>
    )
}

export default NameManipulator