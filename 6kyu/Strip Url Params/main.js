/*

Complete the method so that it does the following:
Removes any duplicate query string parameters from the url (the first occurence should be kept)
Removes any query string parameters specified within the 2nd argument (optional array)
Examples:
stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'

*/

// solution

function stripUrlParams(url, paramsToStrip = []) {
    const [baseUrl, queryString] = url.split("?");
    if (!queryString) return url;

    const queryParams = queryString.split("&");
    const paramPairs = new Map();

    for (const param of queryParams) {
        const [key, value] = param.split("=");
        if (!paramPairs.has(key)) {
            paramPairs.set(key, value);
        }
    }

    for (const param of paramsToStrip) {
        paramPairs.delete(param);
    }

    const newParams = [...paramPairs.entries()].map(
        ([key, value]) => `${key}=${value}`
    );
    const newQueryString = newParams.length ? `?${newParams.join("&")}` : "";
    return `${baseUrl}${newQueryString}`;
}
