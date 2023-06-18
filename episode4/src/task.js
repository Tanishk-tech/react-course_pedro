export const Task=(props) => {
    return (
        <div style={{background : props.complete ? "green" : "white" }}>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.completion( props.id)}>complete</button>
            <button onClick={() => props.deleted(props.id)}>remove </button>
        </div>
    )
}