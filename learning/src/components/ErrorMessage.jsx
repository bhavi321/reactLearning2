const ErrorMessage = ({items}) => {
    return (
        <>
        {items.length===0 && <p>I am Hungry</p>}
        </>
    )
}
export default ErrorMessage;