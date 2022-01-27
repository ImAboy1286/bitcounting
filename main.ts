function ResetBits (BitNum: number) {
    while (index <= BitNum) {
        BitArray[index] = false
        index += 1
    }
}
function BitCheck (BitCount: number) {
    HasFailed = false
    while (index2 <= BitCount) {
        if (BitArray[index2]) {
        	
        } else {
            HasFailed = true
        }
        index2 += 1
    }
    return HasFailed
}
function BitUpdate () {
    for (let index3 = 0; index3 <= 24; index3++) {
        if (!(BitCheck(24 - index3))) {
            ResetBits(24 - index3)
            BitArray[24 - index3] = true
            return
        }
    }
}
let index2 = 0
let HasFailed = false
let index = 0
let BitArray: boolean[] = []
BitArray = []
for (let index3 = 0; index3 < 25; index3++) {
    BitArray.push(false)
}
basic.showString("BitCounter")
loops.everyInterval(100, function () {
    let list2: number[];
if (true) {
        BitUpdate()
        for (let index5 = 0; index5 <= 24; index5++) {
            BitArray = []
            if (BitArray[index5]) {
                led.plot(index5 % 5, index5 / 5)
            } else {
                led.unplot(index5 % 5, index5 / 5)
            }
        }
    }
})
