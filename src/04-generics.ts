import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))

function sort<T>(data: T[], sorter: (a: T, b: T) => number): T[] {
    // 使用数组的 slice 方法创建副本，以避免修改原始数组
    const sortedArray = data.slice();
  
    // 使用数组的 sort 方法进行排序，传入自定义的排序函数
    sortedArray.sort(sorter);
  
    return sortedArray;
  }
  
  // 示例调用
  // Sort friends by age
  console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
  
  // Sort colleagues by extension number
  console.log(
    sort<Colleague>(
      colleagues.current,
      (a, b) => a.contact.extension - b.contact.extension
    )
  );