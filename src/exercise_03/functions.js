const damage = (level, power, attack, defense) => Math.floor(
  Math.floor(level * 0.4 + 2) * power * attack / defense,
);

const finalDamage = (damage, multi, weatherMatch, moveTypeMatch, burn, typeMatch) => {
};
