function cookieToJson(inputString) {
    // Split the string into key-value pairs
    const pairs = inputString.split("; ");

    // Create an object from the key-value pairs
    const data = {};
    for (const pair of pairs) {
        const [key, value] = pair.split("=");
        data[key] = value;
    }

    return data;
}

module.exports = { cookieToJson };
