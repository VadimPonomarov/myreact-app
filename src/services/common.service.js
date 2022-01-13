const getFetch = (url) => {
    return (
        fetch(`${url}`)
            .then(responce => responce.json()
            )
    )
}

const commons = {getFetch}

export default commons