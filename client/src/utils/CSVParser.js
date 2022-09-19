export async function CSVToArray( strData, strDelimiter ){
    strDelimiter = (strDelimiter || ",");
    const objPattern = new RegExp(
        (
            // Delimiters.
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
    )

    let arrData = [[]]
    let arrMatches = null

    while (arrMatches = objPattern.exec( strData )){

        const strMatchedDelimiter = arrMatches[ 1 ]

        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
        ){
            arrData.push( [] )
        }

        let strMatchedValue

        if (arrMatches[ 2 ]){

            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
            );
        } else {
            strMatchedValue = arrMatches[ 3 ]
        }

        arrData[ arrData.length - 1 ].push( strMatchedValue )
    }

    const headers = arrData[0]
    arrData = arrData.slice(1)
    arrData = arrData.map((line) => {
        const data = {}

        line.forEach((value, index) => {
            data[headers[index]] = value
        })

        return data
    })

    return arrData
}