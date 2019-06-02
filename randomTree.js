/* Takes as input the array size and max value of the elements (100 by default)
Randomly generates a array of given size and max values.
Returns array*/

randomHeapGenerator = (num, maxVal=100) => {
let heap = new Array()
for (let i = 0; i < num;){
    heap[i] = Math.floor((Math.random() * maxVal));
    let chk=0 
    for (let j = 0; j < i; j++){
        if (heap[i]!=heap[j]){
            chk++
            }
        }
    if (chk==i){
        i++
        }
    }
for (let i = ((num/2)-1); i >= 0; i--){ 
    heapify(heap, num, i)
    }
return heap
}

/* Heapifies passed array recursively */

heapify = (array, num, max) => {
    var largest = max;
    var l = 2*max + 1; 
    var r = 2*max + 2; 
    if (l < num && array[l] > array[largest]) 
        largest = l; 
      
    if (r < num && array[r] > array[largest]) 
        largest = r; 
    
    if (largest != max) 
    { 
        let temp = array[max]
        array[max]=array[largest]
        array[largest]=temp 
        heapify(array, num, largest); 
    } 
} 

//console.log(randomHeapGenerator(5,15))

