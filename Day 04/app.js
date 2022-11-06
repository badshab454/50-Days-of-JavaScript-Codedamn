const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here

    if((Number.isInteger(parseInt(time.charAt(0)))) && time.charAt(1) === ':') {
        time = time.substr(0,3)+'0'+time.substr(3)
    }

    return
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)