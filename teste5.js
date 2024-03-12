function reverseString(string) {
    return (string === '') ? '' : reverseString(string.substr(1)) + string.charAt(0);
}

console.log(reverseString('Paula'));