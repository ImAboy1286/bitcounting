function ResetBits (BitNum: number) {
    for (let index = 0; index <= BitNum; index++) {
        BitArray[index] = false
    }
}
function BitCheck (BitCount: number) {
    HasFailed = false
    for (let index = 0; index <= BitCount; index++) {
        if (BitArray[index]) {
        	
        } else {
            HasFailed = true
        }
    }
    return HasFailed
}
function BitUpdate () {
    for (let index = 0; index <= 24; index++) {
    	
    }
}
let HasFailed = false
let BitArray: boolean[] = []
let Pause = false
BitArray = []
for (let index = 0; index < 25; index++) {
    BitArray.push(false)
}
basic.showString("Bit Counting")
Pause = true
loops.everyInterval(100, function () {
    if (Pause) {
        BitUpdate()
    }
})
