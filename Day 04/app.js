const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here

    if((Number.isInteger(parseInt(time.charAt(0)))) && time.charAt(1) === ':') {
        time = time.substr(0,3)+'0'+time.substr(3)
    }

    if (Number.isInteger(parseInt(time.charAt(3))) && (time.charAt(4) === 'A' || time.charAt(4) === 'P')) {
        time = time.substr(0,3)+'0'+time.substr(3)
    }

    if (time.substr(5) === 'AM' && time.substr(0,2) === '12') {
        return '00:'+time.charAt(3)+time.charAt(4)
    }

    if(time.substr(5) === 'PM' && parseInt(time.substr(0,2)) < 12) {
        const newlyGenerateHours = 12 + parseInt(time.substr(0,2))
        return newlyGenerateHours.toString()+':'+time.charAt(3)+time.charAt(4)
    }






    return time.substr(0,5);
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)