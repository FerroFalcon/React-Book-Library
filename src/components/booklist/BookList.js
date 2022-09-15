import React, { useState } from "react";
import Card from "../card/Card";
import "./BookList.css";

export const Books = [
  {
    id: 1,
    title: "Be Your Own Sunshine: Towards a Better Tomorrow",
    author: "James Allen",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41TimW5-eaL._SX323_BO1,204,203,200_.jpg",
    description:
      "Be Your Own Sunshine is a collection of four works by James Allen that sum up the hows, whys and whats of taming the mind and its infinite energies, of channelizing the power of positive thinking, and striking a balance between the inner world of our thoughts as against the outer world of action. As A Man Thinketh maps out the way in which our thoughts can affect our physical, mental, emotional and social health. It also discusses ways in which we can use our visions and ideas to lead us to peace of mind. From Passion to Peace is a step by step discussion on conquering the factors within us that hinder us from achieving success.",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY346_.jpg",
    description:
      "In this ground-breaking book, Clears reveals exactly how these minuscule changes can grow into such life-altering outcomes. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule, or the trick to entering the Goldilocks Zone), and delves into cutting-edge psychology and neuroscience to explain why they matter. Along the way, he tells inspiring stories of Olympic gold medalists, leading CEOs, and distinguished scientists who have used the science of tiny habits to stay productive, motivated, and happy.",
  },
  {
    id: 3,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51ay1jgMBNL._SX302_BO1,204,203,200_.jpg",
    description:
      "How to Win Friends and Influence People by bestselling author Dale Carnegie gives you time-tested advice and simple techniques on how to deal with people, understand them and get along with them. This book tells you how to: ? Improve your conversation skills ? Avoid arguments and win people over ? Make friends easily ? Become a people person A phenomenal success that has sold millions of copies worldwide, this book will change the way you approach relationships and better equip you to handle life?s situations.",
  },
  {
    id: 4,
    title: "Man's Search For Meaning",
    author: "Viktor E Frankl",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/41ZgK6u73qL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "A prominent Viennese psychiatrist before the war, Viktor Frankl was uniquely able to observe the way that he and other inmates coped with the experience of being in Auschwitz. He noticed that it was the men who comforted others and who gave away their last piece of bread who survived the longest - and who offered proof that everything can be taken away from us except the ability to choose our attitude in any given set of circumstances. The sort of person the prisoner became was the result of an inner decision and not of camp influences alone. Only those who allowed their inner hold on their moral and spiritual selves to subside eventually fell victim to the camp's degenerating influence - while those who made a victory of those experiences turned them into an inner triumph. Frankl came to believe that man's deepest desire is to search for meaning and purpose. This outstanding work offers us all a way to transcend suffering and find significance in the art of living.",
  },
  {
    id: 5,
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    description:
      "We all have an ikigai. It's the Japanese word for a reason to live or a reason to jump out of bed in the morning. Its the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer. Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it. Do that, and you can make every single day of your life joyful and meaningful.",
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg",
    description:
      "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself",
  },
  {
    id: 7,
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg",
    description:
      "A renowned inspirational fiction, The Monk Who Sold His Ferrari is a revealing story that offers the readers a simple yet profound way to live life. The plot of this story revolves around Julian Mantle, a lawyer who has made his fortune and name in the profession. A sudden heart-attack creates havoc in the successful lawyer?s life. Jolted by the sudden onset of the illness, his practice comes to a standstill. He ponders over material success being worth it all, renounces all of it and leaves for India. A visit to India about a spiritual awakening that opens up new vistas and Julian begins to view life in a different perspective. He decides to live his life once again but in a way that is much more fulfilling and meaningful than before. In the book, the reader goes through a spiritual journey and into a very old culture that has gathered much wisdom over the millennia.",
  },
  {
    id: 8,
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51QnuLIY2uL._SX322_BO1,204,203,200_.jpg",
    description:
      "The Power of Your Subconscious Mind is one of the most promising self improvement books that you can gift to yourself or your loved ones. This book is designed to help you improve your relationships, health, and also to give you an internal strength that makes every hurdle look small. The book brings together best of both the worlds – scientific research as well as spiritual wisdom. It used the combined ideas to explain how our subconscious mind has the power to change our lives. The book explains how by understanding and learning to control our subconscious mind, we can welcome a world of prosperity, happiness and success. This book will act as a guide and help you understand the depth of your subconscious, get rid of fears and attract what you desire simply by changing your beliefs. Having sold millions of copies, this book and its ideas have changed the lives of many all over the world.",
  },
  {
    id: 9,
    title:
      "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
    author: "Mark Manson",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg",
    description:
      "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better, happier people For decades, we have been told that positive thinking is the key to a happy, rich life. Fuck positivity, Mark Manson says. Lets be honest, shit is fucked and we have to live with it. In his wildly popular Internet blog, Manson doesnt sugar-coat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, lets-all-feel-good mind-set that has infected American society and spoiled a generation, rewarding them with gold medals just for showing up. Manson makes the argument, backed both by academic research and well-timed poop jokes, that improving our lives hinges not on our ability to turn lemons into lemonade, but on learning to stomach lemons better.",
  },
  {
    id: 10,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
    description:
      "Timeless lessons on wealth, greed, and happiness doing well with money isn?t necessarily about what you know. It?s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do. But in the real world, people don?t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.",
  },
  {
    id: 11,
    title: "Wait, How Do I Write This Email?",
    author: "Danny Rubin",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41y20URWYzL._SX331_BO1,204,203,200_.jpg",
    description:
      "Ever struggle with an email to network or find a job? Help has arrived. In his new book, Wait, How Do I Write This Email?, communications expert Danny Rubin provides 100+ 'game-changing' templates for networking, the job search and LinkedIn. As well, the book teaches people how to harness the power of storytelling and build relationships that last",
  },
  {
    id: 12,
    title: "Karma: A Yogi's Guide to Crafting Your Destiny",
    author: "Sadhguru",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51ewXeUdkvL._SX312_BO1,204,203,200_.jpg",
    description:
      "Full of valuable insights to guide you. WILL SMITH Thoughtful and life-affirming . . . a must-read.TONY ROBBINS Forget what you think you know about karma-Sadhguru shows us it's not a punishment for bad behavior, but a vehicle for transformation and empowerment. This book will put you back in charge of your own life. Tom Brady Pursuing your truth. Understanding this human experience. Embodying the divine is such an ongoing process of unveiling, adapting, and redesigning. The words in this book are the key to unlocking your truth, to see with no eyes, to hear the truth that lies in silence, and to connect with your inner wisdom. Thank you, Sadhguru, for such an enlightening creation, an offering to all seekers. HRH Princess Noor bint Asem of Jordan At last, a book about karma that can be trusted. I have never found a book that explains-and solves-the mystery of karma with the simplicity, clarity, and hopefulness of this invaluable book.",
  },
];

function BookList() {
  const [update, setUpdate] = useState([...Books]);
  return (
    <div className="main_wrapper">
      {update.map((book) => {
        return (
          <Card
            key={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        );
      })}
    </div>
  );
}

export default BookList;
