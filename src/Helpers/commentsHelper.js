
const getComments = (data) => {

    return data.map(eachObj => {
        return eachObj.name
    })

}

export { getComments}