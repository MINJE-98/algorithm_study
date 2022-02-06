// 함수
function brigeTruck(bridge_length, weight, truck_weights) { 
  let bridge = new Array(bridge_length).fill(0);
  // let finish = [];
  let time = 0;
  let after_bridge_weight = 0;
  // 다리의 트럭, 대기하는 트럭이 모두 존재하지않으면 끝.
  while(after_bridge_weight !== 0 || truck_weights.length !== 0) {
    bridge.shift()
    // 다음 차례의 트럭 무게
    const nextTruckWeight = truck_weights[0]
    // 매 회마다 경과시간을 1 추가한다.
    time += 1;
    // 다리에 존재하는 트럭의 무게 업데이트
    after_bridge_weight = bridge.reduce((a, c)=> a + c);
    // 다음 차례의 트럭이 현재 다리의 무게를 합하여도 작거나 같을경우.
    if(weight >= after_bridge_weight + nextTruckWeight) {
      // 다리에 차가 가득 차있는 경우
      if(bridge_length === bridge.length) {
        // 다음 대기중인 트럭은 다리에 진입
        bridge.push(truck_weights.shift());
      }
      else {
        // 다음 대기중인 트럭은 다리에 진입
        bridge.push(truck_weights.shift());
      }
    }
    // 무작성 빼기
    else {
      // 뺏을때 다리에 
      if(weight >= after_bridge_weight + nextTruckWeight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
      
    }
    // 다리에 존재하는 트럭의 무게 업데이트
    after_bridge_weight = bridge.reduce((a, c)=> a + c);
  }
  return time
}
const bridge_length = 2
const weight = 10
const truck_weights = [7,4,5,6]

// 실행


