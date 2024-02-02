import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, EventPass, FriendPartial } from "./myTypes";

type CommonContact = {
  name: string;
  age: number;
  contact: {
    email: string;
    phone?: string;
  };
};

function updateFriend(friend: Friend, updates: FriendPartial): Friend {
  return { ...friend, ...updates };
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}));

function secureFindFriends(
  friends: Friend[],
  criteria: (f: Friend) => boolean
): SecureFriendContact[] {
  const matches = friends.filter(criteria);
  return matches.map((f) => {
    const secure: SecureFriendContact = {
      name: f.name,
      phone: f.phone,
    };
    return secure;
  });
}

let result = secureFindFriends(
  friends,
  (f: Friend) => f.age < 30
);
console.log(result);

function generateEventPass(colleague: Colleague): EventPass {
  const passCode = Math.round(Math.random() * (1000 - 1) + 1);
  return {
    name: colleague.name,
    department: colleague.department,
    passCode: passCode,
  };
}

console.log(generateEventPass(colleagues.current[0]));

function intersection(
  friends: Friend[],
  colleagues: Colleague[]
): CommonContact[] {
  let result: CommonContact[] = [];

  friends.reduce((res, friend) => {
    const colleague = colleagues.find((col) => col.name === friend.name);
    if (colleague && colleague.contact) {
      // Colleague is also a Friend and has contact information
      const commonContact: CommonContact = {
        name: friend.name,
        age: friend.age,
        contact: {
          email: colleague.contact.email,
          phone: friend.phone, // Adjusted this line to access phone directly from Friend
        },
      };
      res.push(commonContact);
    }
    return res;
  }, result);

  return result;
}

console.log(intersection(friends, colleagues.current));