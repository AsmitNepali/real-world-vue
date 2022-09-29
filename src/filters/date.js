export default value => {
    const date = new Date(value)
    return date.toLocaleDateString(['en-us'], {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    })
}