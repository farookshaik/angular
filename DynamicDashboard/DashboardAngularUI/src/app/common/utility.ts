export class Utility {
    static parseQueryString = function (queryString: string): any {
        queryString = queryString.replace("?", "");
        var queryValues = queryString.split("&");
        var queryStringJSON = {};
        queryValues.forEach(query => {
            var splittedValues = query.split("=");
            queryStringJSON[splittedValues[0]] = decodeURIComponent(splittedValues[1]);
        });
        return queryStringJSON;
    };
}
