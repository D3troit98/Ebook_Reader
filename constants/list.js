import images from "./images";
import books from "./ebooks"
const libraryData = [
    {
        id: 1,
        cover: images.Legion,
        title: 'Legion Skin Deep',
        author: 'Brandon Sanderson',
        rating: 4.8,
        synopsis: "Legion (2012) tells the story of Stephen Leeds, better known as 'Legion', a man whose unique mental condition allows him to generate multitude of personae. He is a brilliant problem solver, rich and quite good at what he does, helped by his hallucinations.",
        books: books.LegionBook
    },
    {
        id: 2,
        cover: images.PoppyWar,
        title: 'The Poppy War',
        author: 'R F Juang',
        rating: 4.2,
        synopsis: 'The Poppy War is the story of passionate yet ruthless Fang Runin, also known as Rin, who grows up poor, orphaned by a previous war. But she studies and gets into an elite military academy, and develops a gift for shamanism that lets her call upon the fire powers of a vengeful Phoenix god',
        books: books.PoppyBook
    },
    {
        id: 3,
        cover: images.deathMistress,
        title: 'Deaths Mistress',
        author: 'Terry Goodkind',
        rating: 4.3,
        books: books.DeathMistress,
        synopsis: "Death’s Mistress follows Nicci, a powerful sorceress and the Death’s Mistress of the title and Nathan Rahl, both prophet and wizard are tasked by Lord Richard Rahl as emissaries of the D’Haran Empire spreading word of the end of tyranny and the start of his rule and a new free age to the various peoples of the Old World."
    },
    {
        id: 4,
        cover: images.spinning,
        title: 'Spinning Silver',
        author: 'Naomi Novik',
        rating: 4.0,
        books: books.SpinningSilver,
        synopsis: "Spinning Silver is the story of three women: Miryem, the daughter of a kindhearted but hopelessly ineffectual moneylender; Wanda, the quiet but observant and steadfast village girl, sent to Miryem to work off her father’s debts; Irina, a noblewoman who has Staryk blood in her veins and the daughter of an ambitious duke with eyes on the crown."
    },
]

export { libraryData }
