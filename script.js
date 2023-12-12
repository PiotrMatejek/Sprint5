"use strict";

// // ZAD 1 //

const people = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Waldemar",
    lastName: "Malina",
  },
];

const users = JSON.parse(JSON.stringify(people));

const addPeopleNickname = (users) => {
  const person = users.map((user) => {
    const sliceFirstName =
      user.firstName.length > 3
        ? user.firstName.slice(-3)
        : user.firstName.toLowerCase();

    const sliceLastName =
      user.lastName.length > 3 ? user.lastName.slice(0, 3) : user.lastName;

    const reverseFirstName = sliceFirstName.split("").reverse();
    reverseFirstName[0] = reverseFirstName[0].toUpperCase();
    const textFirstName = reverseFirstName.join("");
    
    const textLastName = sliceLastName
      .split("")
      .reverse()
      .join("")
      .toLowerCase();

    const nickName = `${textFirstName}${textLastName}`;
    user.nickname = nickName;

    return user;
  });

  return person;
}

addPeopleNickname(users);

// // ZAD 2 //

const copyUsers = JSON.parse(JSON.stringify(users));

const addUsersAge = (usersNicknames) => {
  const addAgeValue = usersNicknames.map((user) => {
    const userLength = user.firstName.length + user.lastName.length;

    if (userLength % 2 === 0) {
      const lengthKeys = countLengthKeys(user);
      user.age = lengthKeys - user.firstName.length;
    } else {
      user.age = userLength;
    }

    return user;
  });

  return addAgeValue;
}

const countLengthKeys = (user) => {
  let counter = 0;

  for (const char of Object.keys(user)) {
    counter += char.length;
  }

  return counter;
}

const userAge = addUsersAge(copyUsers);

// // Zad 3 //

const people3 = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
    nickname: "Ajcwok",
    age: 19,
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
    nickname: "Najwon",
    age: 8,
  },
  {
    firstName: "Waldemar",
    lastName: "Malina",
    nickname: "Ramlam",
    age: 17,
  },
];

const copyPeople3 = JSON.parse(JSON.stringify(people3));

const introdiuceYourself = () => {
  console.log(
    `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}]`
  );
};

const introdiuce = (copyPeople3) => {
  return copyPeople3.forEach((user) => {
    user.introdiuceYourself = introdiuceYourself;
    user.introdiuceYourself();
  });
}

introdiuce(copyPeople3)


// ZAD 4.

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

const checkColors = (copyPeople3, number = 5) => {
  if (number > 30) {
    return `podałeś za dużą liczbę, liczba nie może być większa niż 30`;
  }

  if (number < 1) {
    return `podałeś za małą liczbę, liczba nie może być mniejsza niż 1`;
  }

  copyPeople3.forEach((user) => {
    let counter = 0;
    const userKeyValue = Object.entries(user).slice(0, 3);

    for (const char of userKeyValue) {
      counter += char[0].length + char[1].length;
    }

    const indexColor = Math.abs((counter - number) % 6);
    console.log(`${user.firstName} ${user.lastName} : ${colors[indexColor]}`);
  });
}

checkColors(copyPeople3);
