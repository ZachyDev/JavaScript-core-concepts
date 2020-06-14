// declare a function

const trackOrder = (trackId,city = 'Nairobi') => {
    console.log(`Traking ${ trackId } in ${ city }`);
}
trackOrder(20192) //second param unspecified
trackOrder(20282,'Eldoret'); //second param specified