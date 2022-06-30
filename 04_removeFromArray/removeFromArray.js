var removeFromArray = function() {
    //accept any number of arguments
    let args = Array.from(arguments);
    //console.log(args);

    let valuesArray = args[0];
    //console.log(valuesArray);

    let filterArray = args.slice(1);
    //console.log(filterArray);

    let filteredArray = valuesArray.filter(value => !filterArray.includes(value));
    //console.log(filteredArray);
 
    return filteredArray;
}

// Do not edit below this line
module.exports = removeFromArray;
