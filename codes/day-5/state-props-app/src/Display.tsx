type DisplayPropType = {
    titleData: string
}
const Display = (props: DisplayPropType) => {
    return (
        <p>
            <span>Display component:</span>
            <br />
            Title:&nbsp;{props.titleData}
        </p>
    )
}

export default Display