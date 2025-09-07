// ---------- Data Definitions ----------
const MARKET = {
  Seeds: [
    { name: "Tomato Seed",       item: "Tomato",       price: 10,  emoji: "🍅" },
    { name: "Grape Seed",        item: "Grape",        price: 25,  emoji: "🍇" },
    { name: "Orange Seed",       item: "Orange",       price: 16,  emoji: "🍊" },
    { name: "Apple Seed",        item: "Apple",        price: 20,  emoji: "🍎" },
    { name: "Berry Seed",        item: "Berry",        price: 15,  emoji: "🍓" },
    { name: "Watermelon Seed",   item: "Watermelon",   price: 25,  emoji: "🍉" },
    { name: "Carrot Seed",       item: "Carrot",       price: 8,   emoji: "🥕" },
    { name: "Pumpkin Seed",      item: "Pumpkin",      price: 18,  emoji: "🎃" },
    { name: "Corn Seed",         item: "Corn",         price: 12,  emoji: "🌽" },
    { name: "Strawberry Seed",   item: "Strawberry",   price: 15,  emoji: "🍓" },
    { name: "Blueberry Seed",    item: "Blueberry",    price: 14,  emoji: "🫐" },
    { name: "Peach Seed",        item: "Peach",        price: 22,  emoji: "🍑" },
    { name: "Pear Seed",         item: "Pear",         price: 21,  emoji: "🍐" },
    { name: "Mango Seed",        item: "Mango",        price: 26,  emoji: "🥭" },
    { name: "Pineapple Seed",    item: "Pineapple",    price: 28,  emoji: "🍍" },
    { name: "Coconut Seed",      item: "Coconut",      price: 30,  emoji: "🥥" },
    { name: "Lemon Seed",        item: "Lemon",        price: 14,  emoji: "🍋" },
    { name: "Lime Seed",         item: "Lime",         price: 14,  emoji: "🍈" },
    { name: "Cherry Seed",       item: "Cherry",       price: 19,  emoji: "🍒" },
    { name: "Plum Seed",         item: "Plum",         price: 18,  emoji: "🍑" },
    { name: "Fig Seed",          item: "Fig",          price: 20,  emoji: "🍈" },
    { name: "Pomegranate Seed",  item: "Pomegranate",  price: 24,  emoji: "🍎" },
    { name: "Avocado Seed",      item: "Avocado",      price: 27,  emoji: "🥑" },
    { name: "Melon Seed",        item: "Melon",        price: 23,  emoji: "🍈" },
    { name: "Kiwi Seed",         item: "Kiwi",         price: 22,  emoji: "🥝" },
    { name: "Papaya Seed",       item: "Papaya",       price: 25,  emoji: "🫒" },
    { name: "Dragonfruit Seed",  item: "Dragonfruit",  price: 30,  emoji: "🐉" },
    { name: "Starfruit Seed",    item: "Starfruit",    price: 28,  emoji: "⭐" },
    { name: "Cabbage Seed",      item: "Cabbage",      price: 12,  emoji: "🥬" },
    { name: "Onion Seed",        item: "Onion",        price: 10,  emoji: "🧅" }
  ],
  Animals: [
   { name: "Watermelon Panda",   emoji: "🐼🍉", cost: { bamboo:1 },       gestation: 15000, maturity: 30000 },
   { name: "Berry Bunny",        emoji: "🐰🍓", cost: { Carrot:2 },       gestation: 10000, maturity: 20000 },
   { name: "Pumpkin Pig",        emoji: "🐷🎃", cost: { Pumpkin:2 },      gestation: 12000, maturity: 24000 },
   {  name: "Carrot Horse",       emoji: "🐴🥕", cost: { Carrot:4 },       gestation: 20000, maturity: 40000 },
   { name: "Strawberry Fox",     emoji: "🦊🍓", cost: { Strawberry:3 },   gestation: 14000, maturity: 28000 },
   { name: "Blueberry Owl",      emoji: "🦉🫐", cost: { Blueberry:3 },    gestation: 16000, maturity: 32000 },
   { name: "Peach Cat",          emoji: "🐱🍑", cost: { Peach:2 },        gestation: 13000, maturity: 26000 },
   { name: "Pear Parrot",        emoji: "🦜🍐", cost: { Pear:2 },         gestation: 15000, maturity: 30000 },
   { name: "Mango Monkey",       emoji: "🐒🥭", cost: { Mango:3 },        gestation: 17000, maturity: 34000 },
   { name: "Pineapple Dog",      emoji: "🐶🍍", cost: { Pineapple:3 },    gestation: 15000, maturity: 30000 },
   { name: "Lemon Lizard",       emoji: "🦎🍋", cost: { Lemon:2 },        gestation: 10000, maturity: 20000 },
   { name: "Lime Frog",          emoji: "🐸🍈", cost: { Lime:2 },         gestation: 9000,  maturity: 18000 },
   { name: "Cherry Chinchilla",  emoji: "🐹🍒", cost: { Cherry:2 },       gestation: 11000, maturity: 22000 },
   { name: "Plum Panda",         emoji: "🐼🍑", cost: { Plum:2 },         gestation: 15000, maturity: 30000 },
   { name: "Corn Crow",          emoji: "🐦🌽", cost: { Corn:2 },         gestation: 10000, maturity: 20000 },
   { name: "Coconut Crab",       emoji: "🦀🥥", cost: { Coconut:2 },      gestation: 12000, maturity: 24000 }
   { name: "Fig Ferret",         emoji: "🦦🍈", cost: { Fig:2 },          gestation: 13000, maturity: 26000 },
   { name: "Pomegranate Peacock",emoji: "🦚🍎", cost: { Pomegranate:3 }, gestation: 16000, maturity: 32000 },
   { name: "Avocado Alpaca",     emoji: "🦙🥑", cost: { Avocado:3 },      gestation: 18000, maturity: 36000 }, 
   { name: "Melon Meerkat",      emoji: "🦦🍈", cost: { Melon:2 },        gestation: 14000, maturity: 28000 },
   { name: "Kiwi Koala",         emoji: "🐨🥝", cost: { Kiwi:2 },         gestation: 15000, maturity: 30000 }, 
   { name: "Papaya Penguin",     emoji: "🐧🫒", cost: { Papaya:3 },       gestation: 17000, maturity: 34000 },
   { name: "Dragonfruit Drake",  emoji: "🐉",   cost: { Dragonfruit:3 }, gestation: 20000, maturity: 40000 },
   { name: "Starfruit Stallion", emoji: "🐎⭐", cost: { Starfruit:3 },    gestation: 19000, maturity: 38000 },
   { name: "Cabbage Cow",        emoji: "🐄🥬", cost: { Cabbage:2 },      gestation: 16000, maturity: 32000 },
   { name: "Onion Otter",        emoji: "🦦🧅", cost: { Onion:2 },        gestation: 12000, maturity: 24000 },
   { name: "Silk Spider",        emoji: "🕷️",  cost: { Bamboo:2 },       gestation: 8000,  maturity: 16000 },
   { name: "Gem Gecko",          emoji: "🦎💎", cost: { Lime:3 },         gestation: 9000,  maturity: 18000 },
   { name: "Ink Squid",          emoji: "🦑",   cost: { Seaweed:3 },      gestation: 11000, maturity: 22000 },
   { name: "Lantern Firefly",    emoji: "🪲💡", cost: { Honey:2 },        gestation: 7000,  maturity: 14000 }
],
  Supplies: [
   { name: "Bamboo",   key: "bamboo",   price: 8,  emoji: "🎋" },
   { name: "Cookbook", key: "cookbook", price: 60, emoji: "📖" },
   { name: "Moonlace Ribbon", key: "moonlace_ribbon", price: 24, emoji: "🎀🌙" },
   { name: "Sparkle Dust", key: "sparkle_dust", price: 18, emoji: "✨🧂" },
   { name: "Battle Blush", key: "battle_blush", price: 32, emoji: "💄⚔️" },
   { name: "Mystic Teacup", key: "mystic_teacup", price: 20, emoji: "🍵🔮" },
   { name: "Panda Perfume", key: "panda_perfume", price: 28, emoji: "🐼🌸" },
   { name: "Enchanted Hairbrush", key: "enchanted_hairbrush", price: 22, emoji: "🪮✨" },
   { name: "Fluffy Battle Boots", key: "fluffybattleboots", price: 40, emoji: "🥾💖" },
   { name: "Petal Shield", key: "petal_shield", price: 50, emoji: "🛡️🌺" },
   { name: "Heartsteel Dagger", key: "heartsteel_dagger", price: 45, emoji: "🗡️💘" },
   { name: "Cotton Candy Torch", key: "cottoncandytorch", price: 16, emoji: "🍭🔥" },
   { name: "Twinkle Seeds", key: "twinkle_seeds", price: 12, emoji: "🌱✨" },
   { name: "Unicorn Glue", key: "unicorn_glue", price: 14, emoji: "🦄🧴" },
   { name: "Bubblegum Scroll", key: "bubblegum_scroll", price: 30, emoji: "📜🍬" },
   { name: "Cherry Wand", key: "cherry_wand", price: 38, emoji: "🍒🪄" },
   { name: "Glitter Bomb", key: "glitter_bomb", price: 26, emoji: "💣✨" },
   { name: "Rosewater Flask", key: "rosewater_flask", price: 20, emoji: "🌹🧪" },
   { name: "Snuggle Cloak", key: "snuggle_cloak", price: 35, emoji: "🧥🐑" },
   { name: "Lollipop Lockpick", key: "lollipop_lockpick", price: 18, emoji: "🍭🗝️" },
   { name: "Fairy Ink", key: "fairy_ink", price: 15, emoji: "🧚🖋️" },
   { name: "Starberry Jam", key: "starberry_jam", price: 10, emoji: "🍓🌟" },
   { name: "Dreamcatcher Net", key: "dreamcatcher_net", price: 28, emoji: "🕸️💤" },
   { name: "Marshmallow Saddle", key: "marshmallow_saddle", price: 42, emoji: "🐴🍡" },
   { name: "Crystal Comb", key: "crystal_comb", price: 16, emoji: "💎🧵" },
   { name: "Lavender Bomb", key: "lavender_bomb", price: 22, emoji: "💣💜" },
   { name: "Peachy Pouch", key: "peachy_pouch", price: 12, emoji: "🍑🎒" },
   { name: "Whimsy Bell", key: "whimsy_bell", price: 8, emoji: "🔔🦋" },
   { name: "Sugar Fang", key: "sugar_fang", price: 34, emoji: "🍬🦷" },
   { name: "Blossom Bandages", key: "blossom_bandages", price: 10, emoji: "🩹🌸" },
   { name: "Cupcake Trap", key: "cupcake_trap", price: 25, emoji: "🧁🪤" },
   { name: "Velvet Rope", key: "velvet_rope", price: 14, emoji: "🪢💗" },
   { name: "Twilight Lantern", key: "twilight_lantern", price: 30, emoji: "🏮🌌" },
   { name: "Petal Paint", key: "petal_paint", price: 12, emoji: "🎨🌺" },
   { name: "Charm Thread", key: "charm_thread", price: 9, emoji: "🧵🔮" },
   { name: "Bubble Shield", key: "bubble_shield", price: 36, emoji: "🛡️🫧" },
   { name: "Frosted Mirror", key: "frosted_mirror", price: 20, emoji: "🪞❄️" },
   { name: "Giggling Gearbox", key: "giggling_gearbox", price: 40, emoji: "⚙️😂" },
   { name: "Snuggle Seeds", key: "snuggle_seeds", price: 11, emoji: "🌱🧸" },
   { name: "Candyfloss Rope", key: "candyfloss_rope", price: 13, emoji: "🪢🍥" },
   { name: "Moonberry Muffin", key: "moonberry_muffin", price: 8, emoji: "🧁🌙" },
   { name: "Twinkle Tonic", key: "twinkle_tonic", price: 19, emoji: "🧃✨" },
   { name: "Petal Prism", key: "petal_prism", price: 27, emoji: "🔮🌸" },
   { name: "Fluffbomb", key: "fluffbomb", price: 33, emoji: "💣🐑" },
   { name: "Charm Collar", key: "charm_collar", price: 15, emoji: "🧸🔗" },
   { name: "Rose Quartz Pickaxe", key: "rosequartzpickaxe", price: 48, emoji: "⛏️🌹" },
   { name: "Glimmer Goggles", key: "glimmer_goggles", price: 22, emoji: "🥽✨" },
   { name: "Butterfly Net", key: "butterfly_net", price: 18, emoji: "🦋🕸️" },
   { name: "Panda Plushie", key: "panda_plushie", price: 20, emoji: "🐼🧸" },
   { name: "Mystic Milk", key: "mystic_milk", price: 10, emoji: "🥛🔮" },
   { name: "Rainbow Thread", key: "rainbow_thread", price: 14, emoji: "🧵🌈" },
   { name: "Cotton Cloud", key: "cotton_cloud", price: 12, emoji: "☁️🧺" },
   { name: "Starfruit Soap", key: "starfruit_soap", price: 9, emoji: "🧼⭐" },
   { name: "Cherry Charm", key: "cherry_charm", price: 16, emoji: "🍒🔮" },
   { name: "Glitter Saddle", key: "glitter_saddle", price: 38, emoji: "🐴✨" },
   { name: "Petal Pouch", key: "petal_pouch", price: 10, emoji: "🌸🎒" },
   { name: "Snuggle Scroll", key: "snuggle_scroll", price: 26, emoji: "📜🧸" },
   { name: "Fae Dust", key: "fae_dust", price: 17, emoji: "🧚✨" },
   { name: "Love Lock", key: "love_lock", price: 20, emoji: "🔒💘" },
   { name: "Glimmer Gloves", key: "glimmer_gloves", price: 14, emoji: "🧤✨" },
   { name: "Peachy Prism", key: "peachy_prism", price: 21, emoji: "🔮🍑" },
   { name: "Twinkle Trap", key: "twinkle_trap", price: 29, emoji: "🪤✨" },
   { name: "Bubble Boots", key: "bubble_boots", price: 32, emoji: "🥾🫧" },
   { name: "Petal Umbrella", key: "petal_umbrella", price: 26, emoji: "☂️🌸" },
   { name: "Snuggle Saddle", key: "snuggle_saddle", price: 40, emoji: "🐴🧸" },
   { name: "Moonlight Thread", key: "moonlight_thread", price: 14, emoji: "🧵🌙" },
   { name: "Glimmer Cape", key: "glimmer_cape", price: 36, emoji: "🧥✨" },
   { name: "Cherry Bomb", key: "cherry_bomb", price: 28, emoji: "💣🍒" },
   { name: "Fae Lantern", key: "fae_lantern", price: 30, emoji: "🏮🧚" },
   { name: "Cotton Quiver", key: "cotton_quiver", price: 22, emoji: "🏹🧺" },
   { name: "Twinkle Arrows", key: "twinkle_arrows", price: 18, emoji: "🏹✨" },
   { name: "Heart Helm", key: "heart_helm", price: 42, emoji: "🪖💖" },
   { name: "Panda Saddlebag", key: "panda_saddlebag", price: 20, emoji: "🎒🐼" },
   { name: "Fluff Scroll", key: "fluff_scroll", price: 24, emoji: "📜🐑" },
   { name: "Peachy Elixir", key: "peachy_elixir", price: 16, emoji: "🧃🍑" },
   { name: "Star Charm", key: "star_charm", price: 12, emoji: "🔮⭐" },
   { name: "Bubble Net", key: "bubble_net", price: 14, emoji: "🕸️🫧" },
   { name: "Snuggle Trap", key: "snuggle_trap", price: 26, emoji: "🪤🧸" },
   { name: "Twilight Compass", key: "twilight_compass", price: 30, emoji: "🧭🌌" },
   { name: "Petal Flask", key: "petal_flask", price: 18, emoji: "🧪🌺" },
   { name: "Charm Bell", key: "charm_bell", price: 10, emoji: "🔔💫" },
   { name: "Mystic Thread", key: "mystic_thread", price: 15, emoji: "🧵🔮" },
   { name: "Fluff Goggles", key: "fluff_goggles", price: 20, emoji: "🥽🐑" },
   { name: "Moonberry Ink", key: "moonberry_ink", price: 12, emoji: "🖋️🌙🍓" },
   { name: "Twinkle Saddle", key: "twinkle_saddle", price: 38, emoji: "🐴✨" },
   { name: "Bubble Quill", key: "bubble_quill", price: 14, emoji: "🪶🫧" },
   { name: "Peachy Paint", key: "peachy_paint", price: 10, emoji: "🎨🍑" },
   { name: "Snuggle Prism", key: "snuggle_prism", price: 22, emoji: "🔮🧸" },
   { name: "Fae Compass", key: "fae_compass", price: 28, emoji: "🧭🧚" },
   { name: "Petal Net", key: "petal_net", price: 16, emoji: "🕸️🌸" },
   { name: "Bubble Scroll", key: "bubble_scroll", price: 20, emoji: "📜🫧" },
   { name: "Twinkle Boots", key: "twinkle_boots", price: 34, emoji: "🥾✨" },
   { name: "Moonlight Cloak", key: "moonlight_cloak", price: 40, emoji: "🧥🌙" },
   { name: "Cherry Compass", key: "cherry_compass", price: 18, emoji: "🧭🍒" },
   { name: "Glimmer Flask", key: "glimmer_flask", price: 16, emoji: "🧪✨" },
   { name: "Snuggle Helm", key: "snuggle_helm", price: 36, emoji: "🪖🧸" },
   { name: "Bubble Charm", key: "bubble_charm", price: 12, emoji: "🔮🫧" },
   { name: "Twinkle Quiver", key: "twinkle_quiver", price: 20, emoji: "🏹✨" },
   { name: "Petal Trap", key: "petal_trap", price: 24, emoji: "🪤🌸" },
   { name: "Moonberry Compass", key: "moonberry_compass", price: 22, emoji: "🧭🌙🍓" },
   { name: "Fae Prism", key: "fae_prism", price: 26, emoji: "🔮🧚" },
   { name: "Peachy Scroll", key: "peachy_scroll", price: 18, emoji: "📜🍑" },
   { name: "Snuggle Boots", key: "snuggle_boots", price: 32, emoji: "🥾🧸" },
   { name: "Bubble Paint", key: "bubble_paint", price: 14, emoji: "🎨🫧" },
   { name: "Twinkle Helm", key: "twinkle_helm", price: 38, emoji: "🪖✨" },
   { name: "Petal Goggles", key: "petal_goggles", price: 20, emoji: "🥽🌸" },
   { name: "Moonlight Prism", key: "moonlight_prism", price: 30, emoji: "🔮🌙" },
   { name: "Cherry Trap", key: "cherry_trap", price: 22, emoji: "🪤🍒" },
   { name: "Glimmer Quill", key: "glimmer_quill", price: 16, emoji: "🪶✨" }
];
  ]
};

const CROP_EMOJIS = MARKET.Seeds.reduce((m, s) => (m[s.item] = s.emoji, m), {});

const ANIMAL_DATA = MARKET.Animals.reduce((m, a) => {
  m[a.name] = {
    emoji: a.emoji,
    cost: a.cost,
    gestation: a.gestation,
    maturity: a.maturity
  };
  return m;
}, {});

const CROSS_BREEDS = {
  "Watermelon Panda|Berry Bunny": "Hybrid BunDa",
  "Berry Bunny|Watermelon Panda": "Hybrid BunDa"
};

const LOCATIONS = [
  { name: "Enchanted Forest", desc: "Trees whisper secrets.", goldRange: [10,20], xp:15, skill:"Exploration" },
  { name: "Crystal Cave",     desc: "Shimmering walls.",     goldRange: [5,15],  xp:20, skill:"Exploration", riskHealth:10, riskChance:0.3 },
  { name: "Sunlit Meadow",    desc: "Flowers bloom.",        goldRange: [3,10],  xp:10, skill:"Farming" },
  { name: "Ancient Ruins",    desc: "Forgotten artifacts.",  goldRange: [0,0],   xp:30, skill:"Combat", itemReward:"Iron Sword" }
];

const RECIPES = [
  { name:"Fruit Salad",      emoji:"🥗", ingredients:{Tomato:2,Apple:1},           result:{health:15,xp:10} },
  { name:"Bamboo Stew",      emoji:"🍲", ingredients:{bamboo:2},                  result:{health:20,xp:12} },
  { name:"Panda Treat",      emoji:"🍪", ingredients:{Tomato:1,bamboo:1},         result:{health:5, xp:5} },
  { name:"Watermelon Juice", emoji:"🍹", ingredients:{Watermelon:1},              result:{health:10,xp:6} },
  { name:"Watermelon Salad", emoji:"🥗", ingredients:{Watermelon:1,Berry:2},      result:{health:18,xp:12} },
  { name:"Sweet Summer Pie", emoji:"🥧", ingredients:{Watermelon:2,Apple:1},      result:{health:25,xp:15} }
];

const GEAR_DATA = [
  { name:"Wooden Staff",  type:"weapon", attack:5,  price:50,  emoji:"🪄" },
  { name:"Iron Sword",    type:"weapon", attack:10, price:100, emoji:"⚔️" },
  { name:"Leather Armor", type:"armor",  defense:5, price:70,  emoji:"🥋" },
  { name:"Chainmail",     type:"armor",  defense:10, price:120, emoji:"🛡️" }
];

// ---------- XP & Leveling ----------
function addXP(skillObj, amount) {
  skillObj.xp += amount;
  const needed = skillObj.level * 100;
  if (skillObj.xp >= needed && skillObj.level < 99) {
    skillObj.xp -= needed;
    skillObj.level++;
    GAME.log(`🎉 ${skillObj.name} reached Lv ${skillObj.level}!`);
    GAME.current.achievements.push(`Mastered ${skillObj.name} Lv${skillObj.level}`);
  }
}

// ---------- Classes ----------
class Animal {
  constructor(species, gender) {
    this.species = species;
    this.gender = gender;
    this.age = 0;
    this.isBaby = true;
    this.matureAfter = ANIMAL_DATA[species].maturity;
  }
}

class Character {
  constructor(name, generation = 1, heirs = []) {
    this.name = name;
    this.age = 18;
    this.generation = generation;
    this.alive = true;
    this.achievements = [];
    this.inventory = {
      gold: 100,
      seeds: { Tomato:5,Apple:2,Berry:0,Watermelon:0 },
      bamboo: 3,
      cookbook: 0,
      gear: []
    };
    this.equipment = { weapon:null, armor:null };
    this.skills = {
      Exploration:{name:"Exploration",level:1,xp:0},
      Farming:    {name:"Farming",    level:1,xp:0},
      Combat:     {name:"Combat",     level:1,xp:0},
      Crafting:   {name:"Crafting",   level:1,xp:0},
      Cooking:    {name:"Cooking",    level:1,xp:0},
      Breeding:   {name:"Breeding",   level:1,xp:0}
    };
    this.stats = { health:100, attack:1, defense:0 };
    this.farmGrid = Array(25).fill().map(() => ({ crop:null, ready:false }));
    this.penCols = 5;
    this.penRows = 5;
    this.animalPen = Array(this.penRows).fill().map(() => Array(this.penCols).fill(null));
    this.animalInventory = [];
    this.heirs = heirs;
  }
}

class Game {
  constructor() {
    this.current = null;
    this.hallFame = [];
    this.hallLosers = [];
  }

  startNew(name) {
    this.current = new Character(name);
    // Starter animals: 1 male + 1 female of 2 random species
    const speciesList = MARKET.Animals.map(a => a.name);
    const chosenSpecies = [];
    while (chosenSpecies.length < 2) {
      const pick = speciesList[Math.floor(Math.random() * speciesList.length)];
      if (!chosenSpecies.includes(pick)) chosenSpecies.push(pick);
    }
    chosenSpecies.forEach(species => {
      const male = new Animal(species, "Male");
      male.isBaby = false;
      const female = new Animal(species, "Female");
      female.isBaby = false;
      this.addAnimalToPen(male);
      this.addAnimalToPen(female);
    });
    this.log(`Welcome, ${name}! Your legacy begins.`);
    this.renderFarmGrid();
    this.renderPenGrid();
    this.updateUI();
    this.toggleMenu(true);
  }

  log(msg) {
    const logEl = document.getElementById("gameLog");
    logEl.innerHTML += `<p>> ${msg}</p>`;
    logEl.scrollTop = logEl.scrollHeight;
  }

  updateUI() {
    const c = this.current;
    document.getElementById("age").innerText       = `Age: ${c.age}`;
    document.getElementById("health").innerText    = `Health: ${c.stats.health}`;
    document.getElementById("gold").innerText      = `Gold: ${c.inventory.gold}`;
    document.getElementById("generation").innerText = `Gen: ${c.generation}`;
    document.getElementById("inventory").innerText  =
      `Seeds: ${Object.entries(c.inventory.seeds).map(([k,v])=>`${k}(${v})`).join(", ")}`;
    let atk=1, def=0;
    if(c.equipment.weapon) atk+=c.equipment.weapon.attack;
    if(c.equipment.armor)  def+=c.equipment.armor.defense;
    c.stats.attack = atk; c.stats.defense = def;
    populateSeedSelect();
    populateAnimalBreedSelects();
  }

  toggleMenu(on) {
    document.querySelectorAll("#gameMenu button").forEach(b => b.disabled = !on);
  }

  addAnimalToPen(animal) {
    for (let r = 0; r < this.current.penRows; r++) {
      for (let c = 0; c < this.current.penCols; c++) {
        if (!this.current.animalPen[r][c]) {
          this.current.animalPen[r][c] = animal;
          this.renderPenGrid();
          this.populateBreedSelectors();
          return true;
        }
      }
    }
    this.log("❌ No space in pen.");
    return false;
  }

  // ---- Main Actions ----
  doAction(action) {
    if (!this.current?.alive) return;
    const roll = Math.random() * 20;
    hideAllSections();

    switch (action) {
      case "travel": this.openTravel(); return;
      case "farm": document.getElementById("farmSection").classList.remove("hidden"); this.log("💧 Click a plot to plant or harvest."); return;
      case "battle":
        if (roll > 10) { addXP(this.current.skills.Combat, 20); this.log("🗡️ Battle won! Combat XP +20."); }
        else { const dmg = Math.max(0, 15 - this.current.stats.defense); this.current.stats.health -= dmg; this.log(`🛡️ Battle lost… health -${dmg}.`); }
        break;
      case "craft": addXP(this.current.skills.Crafting, 12); this.log("🔨 Crafted tools. Crafting XP +12."); break;
      case "cook":
      case "recipes": this.openRecipes(); return;
      case "breed": this.openBreeding(); return;
      case "market": this.openMarket(); return;
      case "animals": this.openAnimals(); return;
      case "gear": this.openGear(); return;
      case "family": this.log("👑 You honor your ancestors' legacy."); break;
    }

    this.current.age++;
    this.updateUI();
    this.checkDeath();
  }

  // ---- Farming ----
  renderFarmGrid() {
    const grid = document.getElementById("farmGrid");
    grid.innerHTML = "";
    this.current.farmGrid.forEach((plot, i) => {
      const cell = document.createElement("div");
      cell.className = "cell" + (plot.ready ? " ready" : "");
      cell.dataset.index = i;
      cell.innerText = plot.crop ? CROP_EMOJIS[plot.crop] : "";
      grid.appendChild(cell);
    });
  }

  handleFarmClick(idx) {
    const plot = this.current.farmGrid[idx];
    if (!plot.crop) {
      const chosen = document.getElementById("seedSelect").value;
      if (chosen && this.current.inventory.seeds[chosen] > 0) {
        this.current.inventory.seeds[chosen]--;
        plot.crop = chosen;
        this.log(`🌱 Planted ${chosen}. It will mature soon.`);
        setTimeout(() => {
          plot.ready = true;
          this.log(`✅ ${chosen} is ready on plot ${idx + 1}.`);
          this.renderFarmGrid();
        }, 10000);
      } else {
        this.log("❌ Invalid or insufficient seeds.");
      }
    } else if (plot.ready) {
      this.current.inventory.seeds[plot.crop] += 5;
      this.log(`🌾 Harvested 5 ${plot.crop} seeds.`);
      addXP(this.current.skills.Farming, 20);
      plot.crop = null;
      plot.ready = false;
    } else {
      this.log("⏳ Crop still growing.");
    }
    this.updateUI();
    this.renderFarmGrid();
  }

  // ---- Market ----
  openMarket() {
    this.toggleMenu(false);
    hideAllSections();
    const sec = document.getElementById("marketSection");
    sec.classList.remove("hidden");
    const cats = document.getElementById("marketCats");
    cats.innerHTML = "";
    Object.keys(MARKET).forEach(cat => {
      const btn = document.createElement("button");
      btn.innerText = cat;
      btn.onclick = () => this.showMarketItems(cat);
      cats.appendChild(btn);
    });
    this.showMarketItems("Seeds");
  }

  showMarketItems(category) {
    const container = document.getElementById("marketItems");
    container.innerHTML = "";
    const list = MARKET[category];
    list.forEach(item => {
      const el = document.createElement("div");
      el.className = "market-item";
      el.innerHTML = `<span>${item.emoji} ${item.name} -- ${item.price}g</span>`;
      const buy = document.createElement("button");
      buy.innerText = "Buy";
      buy.onclick = () => {
        if (this.current.inventory.gold < item.price) {
          this.log("❌ Not enough gold.");
          return;
        }
        this.current.inventory.gold -= item.price;
        if (category === "Seeds") {
          this.current.inventory.seeds[item.item] =
            (this.current.inventory.seeds[item.item] || 0) + 1;
          this.log(`🛒 Bought 1 ${item.item} seed.`);
        } else if (category === "Animals") {
          const gender = Math.random() < 0.5 ? "Male" : "Female";
          const newAnimal = new Animal(item.name, gender);
          newAnimal.isBaby = false;
          this.current.animalInventory.push(newAnimal);
          this.log(`🐾 Bought ${gender} ${item.name}. Click an empty pen slot to place it.`);
        } else if (category === "Supplies") {
          this.current.inventory[item.key] =
            (this.current.inventory[item.key] || 0) + 1;
          this.log(`${item.emoji} Bought 1 ${item.name}.`);
        }
        this.updateUI();
      };
      el.appendChild(buy);
      container.appendChild(el);
    });
  }

  closeMarket() {
    document.getElementById("marketSection").classList.add("hidden");
    this.toggleMenu(true);
  }

  // ---- Travel ----
  openTravel() {
    this.toggleMenu(false);
    hideAllSections();
    const sec = document.getElementById("travelSection");
    sec.classList.remove("hidden");
    const list = document.getElementById("locationList");
    list.innerHTML = "";
    LOCATIONS.forEach((loc, i) => {
      const el = document.createElement("div");
      el.className = "list-item";
      el.innerHTML = `<strong>${loc.name}</strong><p>${loc.desc}</p>`;
      const btn = document.createElement("button");
      btn.innerText = "Visit";
      btn.onclick = () => this.visitLocation(i);
      el.appendChild(btn);
      list.appendChild(el);
    });
  }

  visitLocation(idx) {
    const loc = LOCATIONS[idx];
    const gold = Math.floor(Math.random() * (loc.goldRange[1] - loc.goldRange[0] + 1)) + loc.goldRange[0];
    this.current.inventory.gold += gold;
    addXP(this.current.skills[loc.skill], loc.xp);
    this.log(`🏞️ Visited ${loc.name}: +${gold}g, +${loc.xp} ${loc.skill} XP.`);
    if (loc.riskHealth && Math.random() < loc.riskChance) {
      this.current.stats.health -= loc.riskHealth;
      this.log(`⚠️ Hazard! -${loc.riskHealth} health.`);
    }
    if (loc.itemReward) {
      const gear = GEAR_DATA.find(g => g.name === loc.itemReward);
      if (gear && !this.current.inventory.gear.includes(gear.name)) {
        this.current.inventory.gear.push(gear.name);
        this.log(`🎁 Found gear: ${gear.emoji} ${gear.name}.`);
      }
    }
    this.current.age++;
    this.updateUI();
    this.checkDeath();
  }

  backFromTravel() {
    document.getElementById("travelSection").classList.add("hidden");
    this.toggleMenu(true);
  }

  // ---- Recipes ----
  openRecipes() {
    this.toggleMenu(false);
    hideAllSections();
    const sec = document.getElementById("recipesSection");
    sec.classList.remove("hidden");
    const list = document.getElementById("recipeList");
    list.innerHTML = "";
    RECIPES.forEach((r, i) => {
      const el = document.createElement("div");
      el.className = "list-item";
      const ingr = Object.entries(r.ingredients).map(([k, v]) => `${k}:${v}`).join(", ");
      el.innerHTML = `<strong>${r.emoji} ${r.name}</strong><p>Needs: ${ingr}</p>`;
      const btn = document.createElement("button");
      btn.innerText = "Cook";
      btn.onclick = () => this.cookRecipe(i);
      el.appendChild(btn);
      list.appendChild(el);
    });
  }

  cookRecipe(idx) {
    const r = RECIPES[idx];
    let ok = true;
    for (const [k, v] of Object.entries(r.ingredients)) {
      const have = (k === "bamboo") ? this.current.inventory.bamboo : (this.current.inventory.seeds[k] || 0);
            if (have < v) { 
        ok = false; 
        break; 
      }
    }
    if (!ok) {
      this.log("❌ Missing ingredients.");
      return;
    }
    // Deduct ingredients
    for (const [k, v] of Object.entries(r.ingredients)) {
      if (k === "bamboo") {
        this.current.inventory.bamboo -= v;
      } else {
        this.current.inventory.seeds[k] -= v;
      }
    }
    // Apply result
    this.current.stats.health += r.result.health;
    addXP(this.current.skills.Cooking, r.result.xp);
    this.log(`🍽️ Cooked ${r.name}: Health +${r.result.health}, Cooking XP +${r.result.xp}.`);
    this.updateUI();
  }

  backFromRecipes() {
    document.getElementById("recipesSection").classList.add("hidden");
    this.toggleMenu(true);
  }

  // ---- Breeding ----
  renderPenGrid() {
    const grid = document.getElementById("penGrid");
    if (!grid) return;
    grid.innerHTML = "";
    for (let r = 0; r < this.current.penRows; r++) {
      for (let c = 0; c < this.current.penCols; c++) {
        const slot = this.current.animalPen[r][c];
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.row = r;
        cell.dataset.col = c;
        if (slot) {
          const emoji = ANIMAL_DATA[slot.species]?.emoji || "❓";
          cell.innerText = emoji + (slot.isBaby ? "🐣" : slot.gender[0]);
        } else {
          cell.innerText = "";
        }
        grid.appendChild(cell);
      }
    }
  }

  populateBreedSelectors() {
    const sel1 = document.getElementById("breedSelect1");
    const sel2 = document.getElementById("breedSelect2");
    if (!sel1 || !sel2) return;
    sel1.innerHTML = "";
    sel2.innerHTML = "";
    this.current.animalPen.flat().forEach((animal, idx) => {
      if (animal && !animal.isBaby) {
        const opt = document.createElement("option");
        opt.value = idx;
        opt.innerText = `${ANIMAL_DATA[animal.species]?.emoji || "❓"} ${animal.species} (${animal.gender})`;
        sel1.appendChild(opt.cloneNode(true));
        sel2.appendChild(opt);
      }
    });
  }

  openBreeding() {
    this.toggleMenu(false);
    hideAllSections();
    const sec = document.getElementById("breedingSection");
    sec.classList.remove("hidden");
    this.renderPenGrid();
    this.populateBreedSelectors();
  }

  attemptBreed() {
    const idx1 = parseInt(document.getElementById("breedSelect1").value);
    const idx2 = parseInt(document.getElementById("breedSelect2").value);
    if (isNaN(idx1) || isNaN(idx2) || idx1 === idx2) {
      this.log("❌ Select two different animals.");
      return;
    }
    const flatPen = this.current.animalPen.flat();
    const a1 = flatPen[idx1];
    const a2 = flatPen[idx2];
    if (!a1 || !a2) {
      this.log("❌ Invalid selection.");
      return;
    }
    if (a1.gender === a2.gender) {
      this.log("❌ Need a male and a female.");
      return;
    }
    const speciesKey = `${a1.species}|${a2.species}`;
    const babySpecies = CROSS_BREEDS[speciesKey] || a1.species;
    const gestation = ANIMAL_DATA[babySpecies]?.gestation || 10000;
    this.log(`❤️ Breeding ${a1.species} and ${a2.species}...`);
    setTimeout(() => {
      this.addBabyToPen(babySpecies);
    }, gestation);
  }

  addBabyToPen(species) {
    for (let r = 0; r < this.current.penRows; r++) {
      for (let c = 0; c < this.current.penCols; c++) {
        if (!this.current.animalPen[r][c]) {
          const gender = Math.random() < 0.5 ? "Male" : "Female";
          const baby = new Animal(species, gender);
          this.current.animalPen[r][c] = baby;
          this.log(`🐣 A baby ${species} (${gender}) was born!`);
          setTimeout(() => {
            baby.isBaby = false;
            this.log(`🎉 ${species} matured into an adult.`);
            this.renderPenGrid();
            this.populateBreedSelectors();
          }, baby.matureAfter);
          this.renderPenGrid();
          this.populateBreedSelectors();
          return;
        }
      }
    }
    this.log("❌ No space in pen for baby.");
  }

  // ---- Gear ----
  openGear() {
    this.toggleMenu(false);
    hideAllSections();
    const sec = document.getElementById("gearSection");
    sec.classList.remove("hidden");
    const list = document.getElementById("gearList");
    list.innerHTML = "";
    GEAR_DATA.forEach(item => {
      const owned = this.current.inventory.gear.includes(item.name);
      const equipped = this.current.equipment[item.type]?.name === item.name;
      const el = document.createElement("div");
      el.className = "list-item";
      const stats = item.type === "weapon" ? `Atk+${item.attack}` : `Def+${item.defense}`;
      el.innerHTML = `<strong>${item.emoji} ${item.name}</strong><p>${stats}</p>`;
      const btn = document.createElement("button");
      if (!owned) {
        btn.innerText = `Buy ${item.price}g`;
        btn.onclick = () => {
          if (this.current.inventory.gold >= item.price) {
            this.current.inventory.gold -= item.price;
            this.current.inventory.gear.push(item.name);
            this.log(`🛠️ Purchased ${item.name}.`);
            this.updateUI();
            this.openGear();
          } else {
            this.log("❌ Not enough gold.");
          }
        };
      } else if (!equipped) {
        btn.innerText = "Equip";
        btn.onclick = () => {
          this.current.equipment[item.type] = item;
          this.log(`⚔️ Equipped ${item.name}.`);
          this.updateUI();
          this.openGear();
        };
      } else {
        btn.innerText = "Equipped";
        btn.disabled = true;
      }
      el.appendChild(btn);
      list.appendChild(el);
    });
  }

  backFromGear() {
    document.getElementById("gearSection").classList.add("hidden");
    this.toggleMenu(true);
  }

  // ---- Death & Succession ----
  checkDeath() {
    if (this.current.stats.health <= 0 || this.current.age > 80) {
      this.current.alive = false;
      this.endGame();
    }
  }

  endGame() {
    this.toggleMenu(false);
    const fame = this.current.achievements.length >= 3;
    const hall = fame ? this.hallFame : this.hallLosers;
    const title = fame ? "Hall of Fame" : "Hall of Losers";
    hall.push(this.current);
    document.getElementById("endTitle").innerText = title;
    document.getElementById("endLog").innerHTML =
      `<p>${this.current.name} died at ${this.current.age}.</p>` +
      `<p>Achievements: ${this.current.achievements.join(", ") || "None"}</p>`;
    this.renderContinuation();
    document.getElementById("endScreen").classList.remove("hidden");
  }

  renderContinuation() {
    const cont = document.getElementById("continuationOptions");
    cont.innerHTML = "";
    const newBtn = document.createElement("button");
    newBtn.innerText = "Start New Life";
    newBtn.onclick = () => location.reload();
    cont.appendChild(newBtn);
    this.current.heirs.forEach(heir => {
      const btn = document.createElement("button");
      btn.innerText = `Continue as ${heir.name}`;
      btn.onclick = () => {
        document.getElementById("endScreen").classList.add("hidden");
        this.current = heir;
        this.log(`👑 Now playing as ${heir.name} (Gen ${heir.generation}).`);
        this.toggleMenu(true);
        this.renderFarmGrid();
        this.renderPenGrid();
        this.updateUI();
      };
      cont.appendChild(btn);
    });
  }
} // End of Game class

// ---------- Utility Functions ----------
function hideAllSections() {
  [
    "farmSection",
    "marketSection",
    "travelSection",
    "recipesSection",
    "animalsSection",
    "gearSection",
    "breedingSection"
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });
}

function populateSeedSelect() {
  const select = document.getElementById("seedSelect");
  if (!select) return;
  select.innerHTML = "";
  MARKET.Seeds.forEach(seed => {
    const count = GAME?.current?.inventory?.seeds?.[seed.item] || 0;
    const opt = document.createElement("option");
    opt.value = seed.item;
    opt.innerText = `${seed.emoji} ${seed.name} (${count})`;
    select.appendChild(opt);
  });
}

function populateAnimalBreedSelects() {
  const sel1 = document.getElementById("breedSelect1");
  const sel2 = document.getElementById("breedSelect2");
  if (!sel1 || !sel2) return;
  sel1.innerHTML = "";
  sel2.innerHTML = "";
  if (!GAME?.current) return;
  GAME.current.animalPen.flat().forEach((animal, idx) => {
    if (animal && !animal.isBaby) {
      const opt = document.createElement("option");
      opt.value = idx;
      opt.innerText = `${ANIMAL_DATA[animal.species]?.emoji || "❓"} ${animal.species} (${animal.gender})`;
      sel1.appendChild(opt.cloneNode(true));
      sel2.appendChild(opt);
    }
  });
}

// ---------- Initialization & Event Wiring ----------
const GAME = new Game();

window.addEventListener("DOMContentLoaded", () => {
  // Start Adventure
  document.getElementById("startButton").addEventListener("click", () => {
    const nameField = document.getElementById("charName");
    const name = nameField.value.trim();
    if (!name) {
      alert("Please enter a name to start your adventure!");
      nameField.focus();
      return;
    }
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("gameUI").classList.remove("hidden");
    GAME.startNew(name);
  });

  // Menu toggle
  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("menuWrapper").classList.toggle("open");
  });

  // Avatar upload
  document.getElementById("avatarUpload").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    document.getElementById("avatarImage").src = URL.createObjectURL(file);
  });

  // Main menu actions
  document.getElementById("gameMenu").addEventListener("click", e => {
    const action = e.target.dataset.action;
    if (action) GAME.doAction(action);
  });

  // Farm grid clicks
  document.getElementById("farmGrid").addEventListener("click", e => {
    if (e.target.classList.contains("cell")) {
      GAME.handleFarmClick(+e.target.dataset.index);
    }
  });

  // Pen grid clicks for placing animals from inventory
  document.getElementById("penGrid").addEventListener("click", e => {
    if (e.target.classList.contains("cell")) {
      const row = +e.target.dataset.row;
      const col = +e.target.dataset.col;
      if (!GAME.current.animalPen[row][col] && GAME.current.animalInventory.length > 0) {
        const animal = GAME.current.animalInventory.shift();
        GAME.current.animalPen[row][col] = animal;
        GAME.renderPenGrid();
        GAME.populateBreedSelectors();
      }
    }
  });

  // Section back/close buttons
  document.getElementById("closeMarket").addEventListener("click", () => GAME.closeMarket());
  document.getElementById("backFromTravel").addEventListener("click", () => GAME.backFromTravel());
  document.getElementById("backFromRecipes").addEventListener("click", () => GAME.backFromRecipes());
  document.getElementById("backFromAnimals").addEventListener("click", () => GAME.backFromAnimals());
  document.getElementById("backFromGear").addEventListener("click", () => GAME.backFromGear());

  // Breeding section
  document.getElementById("breedButton").addEventListener("click", () => {
    GAME.attemptBreed();
  });
  document.getElementById("backFromBreeding").addEventListener("click", () => {
    document.getElementById("breedingSection").classList.add("hidden");
    GAME.toggleMenu(true);
  });
