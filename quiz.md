Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

    [time limit] 4000ms (js)

    [input] array.integer inputArray

    An array of integers containing at least two elements.

    Constraints:
    2 ≤ inputArray.length ≤ 10,
    -1000 ≤ inputArray[i] ≤ 1000.

    [output] integer

    The largest product of adjacent elements.

``` #solution-still-working
function adjacentElementsProduct(input) {
    if(input.length > 1 && input.length < 11) {
        var not_valid = input.filter(function(inp) {
            return inp < -1000 && inp > 1000;
        });
        
        if(!not_valid) {
            
        }
    }
}
```

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
Example
For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product.
Input/Output
* [time limit] 4000ms (js)
* [input] array.integer inputArray An array of integers containing at least two elements. Constraints: 2 ≤ inputArray.length ≤ 10, -1000 ≤ inputArray[i] ≤ 1000. 
* [output] integer The largest product of adjacent elements. 

```
function adjacentElementsProduct(input) {
    if(input.length > 1 && input.length < 11) {
        var not_valid = input.filter(function(inp) {
            return inp < -1000 && inp > 1000;
        });
        
        if(not_valid.length == 0) {
            var eM = Math.max(...input);
            var elMax = 0;
            input.forEach(function(inp) {
                var dummy = inp * eM;
                if(elMax <= dummy) {
                    elMax = dummy;
                }
            })
            
            return elMax;
        }
    }
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3])
```