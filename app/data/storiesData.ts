export interface Story {
    id: string;
    title: string;
    content?: string;
    time?: string;
    image?: string;
  }
  
  interface StoriesData {
    [key: string]: Story[];
  }

export const storiesData: StoriesData = {
    scary: [
      { id: '1', title: 'The Whispering Woods', content: 'On a moonless night, Emma heard whispers from the ancient oak tree...' },
      { id: '2', title: 'Midnight Visitor', content: 'Three knocks echoed at the door exactly at midnight...' },
    ],
    sad: [
      { id: '1', title: 'The Lonely Cloud', content: 'A small cloud named Nimbus drifted alone, searching for friends...' },
      { id: '2', title: 'Fading Colors', content: 'When Grandma stopped painting, the world lost its colors...' },
    ],
    funny: [
      { id: '1', title: 'Silly Billy Goat', content: 'Billy ate his owner\'s hat, then burped alphabet letters...' },
      { id: '2', title: 'Dancing Potatoes', content: 'All potatoes in the kitchen started dancing when the moon rose...' },
    ],
    fantasy: [
      { id: '1', title: 'Dragon\'s Secret', content: 'A tiny dragon lived in the library, guarding the oldest book...' },
      { id: '2', title: 'Moon Castle', content: 'On her 10th birthday, Lily discovered she could walk to the moon...' },
    ],
    jokes: [
      { id: '1', title: 'Animal Jokes', content: 'Why did the chicken join a band? Because it had the drumsticks!' },
      { id: '2', title: 'Kid Jokes', content: 'What do elves learn in school? The elf-abet!' },
    ],
  };