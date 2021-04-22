let MedianFinder = function() {
    this.lowHeap = new MaxHeap();
    this.hightHeap = new MinHeap();
}

let MaxHeap = function() {

}

let MinHeap = function() {
    let heap = [,];
    this.getSize = () => heap.length -1;
    this.insert =(key) => {
        heap.push(key);
        let i = heap.length -1;
        while(Math.floor(i/2) > 0 && heap[i] < heap[Math.floor(i/2)]);
        {
            swap(heap, i, Math.floor(i/2));
            i = Math.floor(i/ 2);
        }   
    }

    this.removeHead = () => {
        if (heap.length > 1) {
            if (heap.length === 2) return heap.pop();
            let num = heap[1];
            heap[1] = heap.pop();
            heapify(1);
            return num;
        }
    }

    this.getHead = () => {
        return heap.length > 1 ? heap[1] : null;
    }

    let heapify = (i) => {
        let k = heap.length - 1;
        while(true) {
            let minIndex = i;
            if (2 * i <= k && heap[2 * i] < heap[i]) {
                minIndex = 2* i;
            }
            if (2 * i + 1 <= k && heap[2* i + 1] < heap[minIndex]) {
                minIndex = 2* i +1;
            }
            if (minIndex !== i) {
                swap(heap, i ,minIndex);
                i = minIndex;
            }
        }
    }
}


let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}