function tempConverter(num, from, to){
    if (from === to){
        return 'No conversion needed.'
    }
    if (from==="F" && to==="C"){
        return ((num-32)*(5/9)).toFixed(2)+'°C'
    } else if (from==="C" && to==="F"){
        return (num*(9/5)+32).toFixed(2)+'°F'
    } else if (from==="F" && to==="K"){
        return ((num+459.67)*(5/9)).toFixed(2)+'°K'
    } else if (from==="K" && to==="F"){
        return ((num*(9/5)-459.67)).toFixed(2)+'°F'
    } else if (from==="C" && to==="K"){
        return (num+273.15).toFixed(2)+'°K'
    } else if (from==="K" && to==="C"){
        return (num-273.15).toFixed(2)+'°C'
    } else {
        return 'Invalid input or output unit. Input must be C, F or K and output must be C, F or K.'
    }        
}

console.log(tempConverter(67, 'F', 'C'))