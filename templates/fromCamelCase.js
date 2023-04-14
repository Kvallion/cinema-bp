function fromCamelCase(name) {
    let newName = name[0].toLowerCase()
    for (let i = 1; i < name.length; i++) {
        let symb = name[i]
        if (symb.toUpperCase() === symb) {
            newName += "-" + symb.toLowerCase()
        } else {
            newName += symb
        }
    }
    return newName
}

module.exports = fromCamelCase