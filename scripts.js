let myColorsObject = {
    colors: ["blue", "green", "orange", "red", "grey"],
    hasManyColors: false
}

if (myColorsObject.colors.length > 3) {
    myColorsObject.hasManyColors = true;
}

console.log(myColorsObject);