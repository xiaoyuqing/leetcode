/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals){
  let arr = []
  let first
  let array = []
  for(let i = 0;i < intervals.length; i++){
      let start = intervals[i].start
      let end = intervals[i].end
      if(start !== end){
          for(let j = start; j <= end; j++){
              if(j===end&&arr[j]!==1){
                  arr[j] = 2
              }else{
                  arr[j] = 1
              }
          }
      }else{
          if(arr[start]===undefined){
              arr[start] = 3
          }
      }
  }
  for(let i = 0; i < arr.length; i++){
      if(first===undefined&&arr[i]===1){
          first = i
      }
      if(arr[i]===2){
          array.push({start:first,end:i})
          first = undefined
      }
      if(arr[i]===3){
          array.push({start:i,end:i})
      }
  }
  return array
};