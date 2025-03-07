function solution(record) {
    const user = {};
    const message = [];
    
    //record 반복 돌려서 user의 최종 이름 정하고 message 배열 만들기
    for(const log of record){
        const [action, uid, name] = log.split(' ');
        if(action === 'Enter' || action === 'Change'){
            user[uid] = name;
        }
        if(action === 'Enter' || action === 'Leave'){
            message.push({action, uid});
        }
    }
    
    //message 배열 이용해서 최종 출력할 메시지 생성
    const answer = message.map(({action, uid}) => {
        const finalName = user[uid];
        if(action === 'Enter'){
            return `${finalName}님이 들어왔습니다.`
        } else if(action === 'Leave'){
            return `${finalName}님이 나갔습니다.`
        }
    })
    return answer;
}