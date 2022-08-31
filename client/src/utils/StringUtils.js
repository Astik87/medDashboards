/**
 * Обрезать строку и добавить троеточие в конце
 * @param {string} string
 * @param {number} length
 * @return {string|*}
 */
function cutLongString(string, length = 5) {
    if(string.length <= length)
        return string

    return string.slice(0, length) + '...'
}

export {
    cutLongString
}
