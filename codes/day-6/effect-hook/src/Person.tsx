type PersonPropType = {
    personName: string,
    handler: (newName: string) => void
}
const Person = (props: Readonly<PersonPropType>) => {
    const { personName, handler } = props
    return (
        <div>
            <h4>Person Component</h4>
            <br />
            <label htmlFor="txtName">Name: &nbsp;</label>
            <input type="text" id="txtName" value={personName} onInput={(e) => {
                const element = e.target as HTMLInputElement
                handler(element.value)
            }} />
        </div>
    )
}

export default Person