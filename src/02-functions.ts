import {Friend, Colleague } from './myTypes'

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
      // ... 可以添加更多的当前同事
    ],
    former: [
      // ... 可以添加以前的同事
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