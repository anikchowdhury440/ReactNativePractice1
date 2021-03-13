import { WorkerService } from 'rn-workers'
    
const worker = new WorkerService();
worker.onmessage = event => {
    // extract person passed from main thread from event object
    let person = event.data
    registerMember(person)
}
  
function registerMember(member) {
    // generating membership card takes some amount of time
    let i = 0
    while (i < Math.pow(10, 10)) {
        i++
        console.log(i)
    }
    // send result back to the main thread
    postMessage(member)
}