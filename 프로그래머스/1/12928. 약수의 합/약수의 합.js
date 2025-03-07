function solution(n) {
    var answer = 0;
    for(i=n;i>0;i--){
        if(n%i==0) answer+=i;
    }
    return answer;
}