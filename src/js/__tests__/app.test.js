import Team from '../app';

test('add добавляет персонажа в команду', () => {
  const team = new Team();
  const character = {
    name: '12345',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  team.add(character);

  const expected = new Set([character]);

  expect(team.members).toEqual(expected);
});

test('add выдает ошибку при добавлении персонажа, который уже есть в команде', () => {
  const team = new Team();
  const character = {
    name: '12345',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  team.add(character);

  function reAdding() {
    team.add(character);
  }

  expect(reAdding).toThrowError('Выбранный персонаж уже в команде');
});

test('addAll добавляет перечисленных персонажей в команду без повторений', () => {
  const team = new Team();
  const characterBowman = {
    name: '12345',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const characterSwordsman = {
    name: '12345',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  team.addAll(characterBowman, characterSwordsman, characterBowman, characterBowman);

  const expected = new Set([characterBowman, characterSwordsman]);

  expect(team.members).toEqual(expected);
});

test('toArray возвращает массив', () => {
  const team = new Team();
  const characterBowman = {
    name: '12345',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const characterSwordsman = {
    name: '12345',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  team.addAll(characterBowman, characterSwordsman);

  const expected = [
    {
      name: '12345',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: '12345',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ];

  expect(team.toArray()).toEqual(expected);
});
