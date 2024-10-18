//move zeros to end

function zeros(arr) {

    let j = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            j = i
            break
        }
    }
    if (j == -1) return

    for (let i = j + 1; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[j] = arr[i]
            arr[i] = 0
            j++
        }
    }
    console.log(arr)

}
zeros([1, 0, 2, 3, 3, 0, 5, 0, 1, 2])