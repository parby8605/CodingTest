function solution(video_len, pos, op_start, op_end, commands) {
    const timeToSecond = (time) => {
        const [min, sec] = time.split(":").map(Number);
        return min * 60 + sec;
    }
    const secondToTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    }
    let currentTime = timeToSecond(pos);
    const videoLength = timeToSecond(video_len);
    const opStart = timeToSecond(op_start);
    const opEnd = timeToSecond(op_end);
    
    for (const command of commands) {
        if (currentTime >= opStart && currentTime <= opEnd) {
           currentTime = opEnd;
        }
        
        if (command === "next") {
            currentTime = Math.min(videoLength, currentTime + 10);
        } else if (command === "prev") {
            currentTime = Math.max(0, currentTime - 10);
        }
        
        if (currentTime >= opStart && currentTime <= opEnd) {
           currentTime = opEnd;
        }
    }
    
    return secondToTime(currentTime);
}