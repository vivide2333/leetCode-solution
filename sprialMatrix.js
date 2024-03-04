// const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12], [13,14,15,16]]
const matrix = [[1,2], [5,6]]
// [13,14,15,16]
function sprialMatrix(M) {
    let left = 0;
    let right = M[0].length - 1;
    let top = 0;
    let bottom = M.length - 1;
    const res = []
    while(right >= left && top <= bottom) {
        for(let idx = left; idx <= right; idx++) {
            console.log('left', res.push(M[top][idx]));
            
        }
        for(let idx = top + 1; idx <= bottom; idx++) {
            console.log('bottom', res.push(M[idx][right]))
            
        }
        // 这里特殊处理一下top === bottom 的情况
        for(let idx = right - 1; idx >= left && top !== bottom; idx--) {
            console.log('right', res.push(M[bottom][idx]))
            
        }
        for(let idx = bottom - 1; idx >= top + 1; idx--) {
            console.log('top',res.push(M[idx][left]))
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return res

}

console.log(sprialMatrix(matrix))