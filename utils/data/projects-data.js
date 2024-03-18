import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Forgoten Key Website Crowler',
        description: "I have write an crawler to find some potential API key, Bearer token, password, api endpoints, potential DOOM XSS, and mutch more.",
        tools: ["crawler",'Python', 'requests', 're', 'json', 'BeautifulSoup', 'REGEX', 'SubdomainFinder', 'Shodan'],
        role: 'Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'PoC use Git as C2',
        description: 'I have write a proof of concept to allow attacker to use github issue as a C2 server. This allow attacker to sent remote commands to victime via GitHub, and get the result via a discord webhook',
        tools: ['C++', 'GitHub', "REGEX", "C2", "Command & Control", "Discord webhook"],
        role: 'Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Bot Sushi Too Good To Go',
        description: 'I write a tool that allow me to eat sushi evey time i whant, and for a verry abbordable price !',
        tools: ['Discord webhook', 'json', 'API', 'REGEX'],
        code: '',
        role: 'Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Multiples tools for League of legend hacking',
        description: "I write some tools to get advantage on enemy sutch as know who is versus me in ranked games, crawl every player on a server, be able to ban somone by reporing him too mutch times, and mutch more.",
        tools: ['LCU API', 'MongoDB', 'Numpy', 'requests', "json", "crawler"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },