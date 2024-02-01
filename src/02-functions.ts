import {Friend, Colleague,EmailContact } from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]): string[] {
    return friends.map((friend) => older(friend));
  }
const friends: Friend[] = [
    {
      name: "Paul Fleming",
      phone: "087-12345",
      age: 25,
    },
    {
      name: "Jane Costello",
      phone: "086--12345",
      age: 31,
    },
  ];
console.log(older(friends[0]))
console.log(allOlder(friends))

// Find the colleague with the highest extension number.
export interface ColleagueHistory {
    current: Colleague[];
    former: Colleague[];
  }
const colleagues: ColleagueHistory = {
    current: [
      {
        name: "Ralph Graham",
        department: "Engineering",
        contact: {
          email: "rgraham@company.com",
          extension: 121,
        },
      },
      {
        name: "Patti Burke",
        department: "Finance",
        contact: {
          email: "pburke@company.com",
          extension: 132,
        },
      },
      {
        name: "Dean Sullivan",
        department: "HR",
        contact: {
          email: "dos@company.com",
          extension: 125,
        },
      },
      
    ],
    former: [
      
    ],
  };
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  
  
  function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    
    const highestExtColleague = highestExtension(cs);
 
    const newExtension = highestExtColleague.contact.extension + 1;
  
    
    const newColleague: Colleague = {
      name,
      department,
      contact: {
        email,
        extension: newExtension,
      },
    };
  
   
    cs.push(newColleague);
  }
  
  
  console.log(highestExtension(colleagues.current));
  
  
  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW
  
  function findFriends(friends: Friend[], criteria: (friend: Friend) => boolean): EmailContact[] {
    const filteredFriends = friends.filter(criteria);
    const result: EmailContact[] = filteredFriends.map((f) => ({ name: f.name,  email: f.phone }));
    return result;
  }
  
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
  console.log(findFriends(friends, (friend) => friend.age < 35));

  function addInterest(friend: Friend, interest: string): string[] {
    // 如果 friend 没有 interests 属性，将其初始化为空数组
    if (!friend.interests) {
      friend.interests = [];
    }
  
    // 将兴趣添加到朋友的兴趣数组中
    friend.interests.push(interest);
  
    // 返回更新后的兴趣数组
    return friend.interests;
  }
  
  // 示例调用
  console.log(addInterest(friends[0], 'Politics'));