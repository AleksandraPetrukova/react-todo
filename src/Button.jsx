export default function Button({className, children, handleClick}) {
    return (
        <button className={className} onClick={handleClick}>{children}</button>
    )
}