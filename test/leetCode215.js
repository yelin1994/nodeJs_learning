let findKthLargees = function(nums, k) {
    let heap = [,], i =0;
    while(i < k) {
        heap.push(nums[i++])
    }
    buildHeap(heap,k);
    for(let i = k ; i< nums.length; i++) {
        if (heap[1] < nums[i]) {
            heap[1] = nums[i];
            heapify(heap, k, i);
        }
    }
}
let buildHeap = (arr, k) => {
    if (k === 1) return;
    for(let i = Math.floor(k/2); i>=1;i--) {
        heapify(arr, k, i);
    }
}

let heapify = (arr, k, i) =>{
    while(true) {
        let minIndex = i;
        if(2* i <= k && arr[2* i] < arr[i]) {
            minIndex = 2 * i;
        }
        if (2* i + 1 <= k && arr[2* i + 1] <arr[minIndex]) {
            minIndex = 2* i +1;
        }
        if (minIndex !== i) {
            swap(i, minIndex);
            i = minIndex;
        } else {
            break;
        }
    }
}

let swap = (arr, i , j) =>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
