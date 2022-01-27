def ResetBits(BitNum: number):
    global index
    while index <= BitNum:
        BitArray[index] = False
        index += 1
def BitCheck(BitCount: number):
    global HasFailed, index2
    HasFailed = False
    while index2 <= BitCount:
        if BitArray[index2]:
            pass
        else:
            HasFailed = True
        index2 += 1
    return HasFailed
def BitUpdate():
    for index3 in range(25):
        if not (BitCheck(24 - index3)):
            ResetBits(24 - index3)
            BitArray[24 - index3] = True
            return
index2 = 0
HasFailed = False
index = 0
BitArray: List[bool] = []
BitArray = []
for index32 in range(25):
    BitArray.append(False)
basic.show_string("BitCounter")

def on_every_interval():
    global BitArray
    if True:
        BitUpdate()
        for index5 in range(25):
            BitArray = []
            if BitArray[index5]:
                led.plot(index5 % 5, index5 / 5)
            else:
                led.unplot(index5 % 5, index5 / 5)
loops.every_interval(100, on_every_interval)
