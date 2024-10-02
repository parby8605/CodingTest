function solution(a, b) {
    return a.reduce((sum, curr, index) => sum + curr * b[index], 0);
}