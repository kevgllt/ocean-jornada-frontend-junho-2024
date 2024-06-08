export default function Tag(props){
    const text = props.text

    return (
        <div>
            <div>{text.status}</div>
            <div>{text.species}</div>
            <div>{text.origin}</div>
        </div>
    )
}