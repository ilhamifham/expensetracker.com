function Alert({children, className}) {
    return (
        <article className={`alert ${className}`}>{children}</article>
    )
}

export default Alert