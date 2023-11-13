let input = document.querySelector('#length-input');
let btn = document.querySelector('#submit-btn');
let output = document.querySelector('#output')

function createArr(num){
    let arr = [];
    for(let i = 0; i<num; i++){
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

function insertSort(array){
        let arr = [...array];
        let n = arr.length;
      
        for (let i = 1; i < n; i++) {
          let current = arr[i];
          let j = i - 1;
      
          while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
          }
      
          arr[j + 1] = current;
        }
        
        return arr;      
}

btn.addEventListener('click', function(){
    let length = Number(input.value);
    if(typeof length === 'number' && length > 0){
        try{
            let array = createArr(length);
            let evenSum = 0;
            let maxEl = -Infinity;
            let maxElIndex, minElIndex;
            let minEl = Infinity;
            ;
            
            for (let i = 0; i < array.length; i++) {
                
                if (array[i] > maxEl) {
                    maxEl = array[i];
                    maxElIndex = i;
                }
                if (i % 2 === 0) {
                    evenSum += array[i];
                } else {
                    if (array[i] < minEl) {
                        minEl = array[i];
                        minElIndex = i;
                    }
                }
            }
            let sortedArr = insertSort(array);

            let outputStr = `Вхідний масив: [${array.join(', ')}];\n
            Сума елементів з парним індексом: ${evenSum};\n
            Найбільший елемент: ${maxEl}\n
            Його індекс: ${maxElIndex}\n
            Найменший елемент з непарним індексом: ${minEl}\n
            Його індекс: ${minElIndex}\n
            Відсортований за зростанням масив: [${sortedArr.join(', ')}]\n`
            output.textContent = outputStr;
        }catch(e){
            alert(e.message)
        }
    }else alert('Invalid input');
})
