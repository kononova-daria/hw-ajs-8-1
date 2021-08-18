export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Выбранный персонаж уже в команде');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    for (let i = 0; i < characters.length; i += 1) {
      if (!this.members.has(characters[i])) this.members.add(characters[i]);
    }
  }

  toArray() {
    const membersArray = [];

    this.members.forEach((character) => membersArray.push(character));

    return membersArray;
  }
}
