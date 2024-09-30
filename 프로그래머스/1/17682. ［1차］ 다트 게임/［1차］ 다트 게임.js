function solution(dartResult) {
    const pattern = /(\d+)([SDT])([*#]?)/g;
    let input;
    const scores = [];
    while((input = pattern.exec(dartResult)) !== null){
        let [, score, bonus, option] = input;
        
        let currentScore = parseInt(score);
        if(bonus==='D') currentScore = Math.pow(currentScore,2);
        if(bonus==='T') currentScore = Math.pow(currentScore,3);
        
        if(option === "*"){
            console.log("cs",currentScore)
            currentScore *= 2;
            console.log(currentScore)
            if(scores.length>0){
                scores[scores.length-1] *= 2;
            }
        } else if(option === "#") {
            currentScore *= -1;
        }
        
        scores.push(currentScore)
    }
    
    const answer = scores.reduce((sum,score)=> sum+score);
    return answer;
}