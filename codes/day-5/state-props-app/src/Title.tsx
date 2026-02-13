type TitlePropType = {
    titleValue: string,
    handler: (value: string) => void
}
//title component from its parent will receive a property object of type TitlePropType
//Readonly<T> => Make all properties in T readonly
function Title(props: Readonly<TitlePropType>) {
    //props.titleValue = ''
    const { titleValue, handler } = props
    return (
        <div>
            <span>Title Component:</span>
            <br />
            <label htmlFor="txtTitle">Title: &nbsp;</label>
            <input type="text" id="txtTitle" value={titleValue}
                onInput={
                    (e) => {
                        const inputElement = e.target as HTMLInputElement
                        handler(inputElement.value)
                    }
                } />
        </div>
    )
}

export default Title