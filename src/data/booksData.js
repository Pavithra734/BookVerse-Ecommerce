const books = [
  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 899,
    oldPrice: 1199,
    rating: 4.7,
    category: "Programming",
    cover:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    price: 799,
    oldPrice: 999,
    rating: 4.9,
    category: "Programming",
    cover:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 3,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 649,
    oldPrice: 849,
    rating: 4.6,
    category: "Programming",
    cover:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 31,
    title: "Design Patterns",
    author: "Erich Gamma",
    price: 949,
    oldPrice: 1249,
    rating: 4.7,
    category: "Programming",
    cover:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 32,
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    price: 549,
    oldPrice: 749,
    rating: 4.8,
    category: "Programming",
    cover:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 33,
    title: "Refactoring",
    author: "Martin Fowler",
    price: 899,
    oldPrice: 1149,
    rating: 4.6,
    category: "Programming",
    cover:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 4,
    title: "The Future Is Faster Than You Think",
    author: "Peter H. Diamandis",
    price: 699,
    oldPrice: 899,
    rating: 4.5,
    category: "Technology",
    cover:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 5,
    title: "AI Superpowers",
    author: "Kai-Fu Lee",
    price: 749,
    oldPrice: 999,
    rating: 4.7,
    category: "Technology",
    cover:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 6,
    title: "The Innovators",
    author: "Walter Isaacson",
    price: 849,
    oldPrice: 1099,
    rating: 4.8,
    category: "Technology",
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 34,
    title: "The Singularity Is Near",
    author: "Ray Kurzweil",
    price: 799,
    oldPrice: 999,
    rating: 4.4,
    category: "Technology",
    cover:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 35,
    title: "Life 3.0",
    author: "Max Tegmark",
    price: 699,
    oldPrice: 899,
    rating: 4.6,
    category: "Technology",
    cover:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 7,
    title: "Atomic Habits",
    author: "James Clear",
    price: 599,
    oldPrice: 799,
    rating: 4.9,
    category: "Self Development",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 8,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 499,
    oldPrice: 699,
    rating: 4.7,
    category: "Self Development",
    cover:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 9,
    title: "Think Like a Monk",
    author: "Jay Shetty",
    price: 549,
    oldPrice: 749,
    rating: 4.6,
    category: "Self Development",
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 36,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 599,
    oldPrice: 799,
    rating: 4.7,
    category: "Self Development",
    cover:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 37,
    title: "Deep Work",
    author: "Cal Newport",
    price: 549,
    oldPrice: 749,
    rating: 4.8,
    category: "Self Development",
    cover:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // FINANCE
  // =========================

  {
    id: 10,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 549,
    oldPrice: 699,
    rating: 4.8,
    category: "Finance",
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 11,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 499,
    oldPrice: 699,
    rating: 4.7,
    category: "Finance",
    cover:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 12,
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    price: 899,
    oldPrice: 1199,
    rating: 4.6,
    category: "Finance",
    cover:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 38,
    title: "Common Stocks and Uncommon Profits",
    author: "Philip Fisher",
    price: 699,
    oldPrice: 899,
    rating: 4.5,
    category: "Finance",
    cover:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 39,
    title: "Naked Economics",
    author: "Charles Wheelan",
    price: 599,
    oldPrice: 799,
    rating: 4.6,
    category: "Finance",
    cover:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // ROMANCE
  // =========================

  {
    id: 13,
    title: "The Notebook",
    author: "Nicholas Sparks",
    price: 449,
    oldPrice: 599,
    rating: 4.6,
    category: "Romance",
    cover:
      "https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 14,
    title: "Me Before You",
    author: "Jojo Moyes",
    price: 499,
    oldPrice: 699,
    rating: 4.8,
    category: "Romance",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 15,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 399,
    oldPrice: 599,
    rating: 4.9,
    category: "Romance",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 40,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    price: 449,
    oldPrice: 649,
    rating: 4.6,
    category: "Romance",
    cover:
      "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 41,
    title: "Outlander",
    author: "Diana Gabaldon",
    price: 599,
    oldPrice: 799,
    rating: 4.7,
    category: "Romance",
    cover:
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // MYSTERY
  // =========================

  {
    id: 16,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 599,
    oldPrice: 799,
    rating: 4.8,
    category: "Mystery",
    cover:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 17,
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    price: 499,
    oldPrice: 699,
    rating: 4.5,
    category: "Mystery",
    cover:
      "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 18,
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 549,
    oldPrice: 749,
    rating: 4.7,
    category: "Mystery",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 42,
    title: "And Then There Were None",
    author: "Agatha Christie",
    price: 399,
    oldPrice: 599,
    rating: 4.9,
    category: "Mystery",
    cover:
      "https://images.unsplash.com/photo-1530538987395-032d1800fdd4?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 43,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    price: 499,
    oldPrice: 699,
    rating: 4.6,
    category: "Mystery",
    cover:
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // FANTASY
  // =========================

  {
    id: 19,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    price: 599,
    oldPrice: 799,
    rating: 4.9,
    category: "Fantasy",
    cover:
      "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 20,
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    price: 549,
    oldPrice: 749,
    rating: 4.8,
    category: "Fantasy",
    cover:
      "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 21,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    price: 699,
    oldPrice: 899,
    rating: 4.7,
    category: "Fantasy",
    cover:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 44,
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    price: 649,
    oldPrice: 849,
    rating: 4.8,
    category: "Fantasy",
    cover:
      "https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 45,
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    price: 649,
    oldPrice: 849,
    rating: 4.9,
    category: "Fantasy",
    cover:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 22,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    price: 799,
    oldPrice: 999,
    rating: 4.8,
    category: "Biography",
    cover:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 23,
    title: "Becoming",
    author: "Michelle Obama",
    price: 699,
    oldPrice: 899,
    rating: 4.9,
    category: "Biography",
    cover:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 24,
    title: "Wings of Fire",
    author: "A. P. J. Abdul Kalam",
    price: 399,
    oldPrice: 549,
    rating: 4.9,
    category: "Biography",
    cover:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 46,
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    price: 749,
    oldPrice: 949,
    rating: 4.9,
    category: "Biography",
    cover:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 47,
    title: "Elon Musk",
    author: "Walter Isaacson",
    price: 849,
    oldPrice: 1099,
    rating: 4.5,
    category: "Biography",
    cover:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // HISTORY
  // =========================

  {
    id: 25,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 699,
    oldPrice: 899,
    rating: 4.8,
    category: "History",
    cover:
      "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 26,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    price: 749,
    oldPrice: 999,
    rating: 4.6,
    category: "History",
    cover:
      "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 27,
    title: "India After Gandhi",
    author: "Ramachandra Guha",
    price: 899,
    oldPrice: 1199,
    rating: 4.7,
    category: "History",
    cover:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 48,
    title: "A People's History of the United States",
    author: "Howard Zinn",
    price: 699,
    oldPrice: 899,
    rating: 4.6,
    category: "History",
    cover:
      "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 49,
    title: "SPQR: A History of Ancient Rome",
    author: "Mary Beard",
    price: 749,
    oldPrice: 949,
    rating: 4.7,
    category: "History",
    cover:
      "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // ACADEMIC
  // =========================

  {
    id: 28,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    price: 1099,
    oldPrice: 1399,
    rating: 4.8,
    category: "Academic",
    cover:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 29,
    title: "Database System Concepts",
    author: "Abraham Silberschatz",
    price: 999,
    oldPrice: 1299,
    rating: 4.6,
    category: "Academic",
    cover:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 30,
    title: "Computer Networks",
    author: "Andrew S. Tanenbaum",
    price: 899,
    oldPrice: 1199,
    rating: 4.7,
    category: "Academic",
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 50,
    title: "Operating System Concepts",
    author: "Abraham Silberschatz",
    price: 999,
    oldPrice: 1299,
    rating: 4.6,
    category: "Academic",
    cover:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 51,
    title: "Discrete Mathematics and Its Applications",
    author: "Kenneth H. Rosen",
    price: 949,
    oldPrice: 1249,
    rating: 4.5,
    category: "Academic",
    cover:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // SCIENCE (NEW CATEGORY)
  // =========================

  {
    id: 52,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    price: 599,
    oldPrice: 799,
    rating: 4.8,
    category: "Science",
    cover:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 53,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    price: 649,
    oldPrice: 849,
    rating: 4.6,
    category: "Science",
    cover:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 54,
    title: "Cosmos",
    author: "Carl Sagan",
    price: 699,
    oldPrice: 899,
    rating: 4.9,
    category: "Science",
    cover:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // SCIENCE FICTION (NEW CATEGORY)
  // =========================

  {
    id: 55,
    title: "Dune",
    author: "Frank Herbert",
    price: 649,
    oldPrice: 849,
    rating: 4.9,
    category: "Science Fiction",
    cover:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 56,
    title: "Ender's Game",
    author: "Orson Scott Card",
    price: 549,
    oldPrice: 749,
    rating: 4.7,
    category: "Science Fiction",
    cover:
      "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 57,
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    price: 599,
    oldPrice: 799,
    rating: 4.7,
    category: "Science Fiction",
    cover:
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=500&q=80",
  },

  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 58,
    title: "The Shadow of Time",
    author: "Felix Fischer",
    price: 589,
    oldPrice: 769,
    rating: 4.7,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-58-the-shadow-of-time/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 59,
    title: "The Legacy of Silence",
    author: "Simon Whitfield",
    price: 389,
    oldPrice: 539,
    rating: 4.1,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-59-the-legacy-of-silence/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 60,
    title: "The Whispering Cipher",
    author: "Marcus Larsson",
    price: 559,
    oldPrice: 809,
    rating: 4.4,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-60-the-whispering-cipher/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 61,
    title: "Meridian beyond Time",
    author: "Yuki Petrov",
    price: 789,
    oldPrice: 989,
    rating: 4.3,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-61-meridian-beyond-time/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 62,
    title: "The Wandering Kingdom",
    author: "James Delgado",
    price: 459,
    oldPrice: 659,
    rating: 4.8,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-62-the-wandering-kingdom/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 63,
    title: "The Circuit of Memory",
    author: "Gabriel Larsson",
    price: 489,
    oldPrice: 709,
    rating: 4.1,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-63-the-circuit-of-memory/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 64,
    title: "Tapestry beyond Truth",
    author: "Clara Petrov",
    price: 429,
    oldPrice: 579,
    rating: 4.7,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-64-tapestry-beyond-truth/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 65,
    title: "Journey and Tomorrow",
    author: "Naomi Malik",
    price: 819,
    oldPrice: 1019,
    rating: 4.2,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-65-journey-and-tomorrow/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 66,
    title: "Signal within Money",
    author: "Sofia Castillo",
    price: 1009,
    oldPrice: 1189,
    rating: 4.5,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-66-signal-within-money/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 67,
    title: "The Secret Current",
    author: "Rafael Fischer",
    price: 1059,
    oldPrice: 1259,
    rating: 4.8,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-67-the-secret-current/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 68,
    title: "The Frozen Horizon",
    author: "Chloe Delgado",
    price: 629,
    oldPrice: 779,
    rating: 4.2,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-68-the-frozen-horizon/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 69,
    title: "The Algorithm of Numbers",
    author: "Kenji Delgado",
    price: 1019,
    oldPrice: 1239,
    rating: 4.1,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-69-the-algorithm-of-numbers/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 70,
    title: "The Burning Reckoning",
    author: "Amelia Malik",
    price: 1119,
    oldPrice: 1369,
    rating: 4.4,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-70-the-burning-reckoning/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 71,
    title: "The Chronicle of Dust",
    author: "Maya Kowalski",
    price: 879,
    oldPrice: 1099,
    rating: 4.1,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-71-the-chronicle-of-dust/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 72,
    title: "The First Compass",
    author: "Yuki Sinclair",
    price: 1049,
    oldPrice: 1269,
    rating: 4.6,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-72-the-first-compass/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 73,
    title: "Threshold after Ashes",
    author: "Theo Malik",
    price: 929,
    oldPrice: 1079,
    rating: 4.7,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-73-threshold-after-ashes/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 74,
    title: "The Unseen Equation",
    author: "Diego Reyes",
    price: 659,
    oldPrice: 879,
    rating: 4.2,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-74-the-unseen-equation/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 75,
    title: "The Lost Blueprint",
    author: "Omar Adeyemi",
    price: 469,
    oldPrice: 669,
    rating: 4.8,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-75-the-lost-blueprint/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 76,
    title: "The Cipher of Numbers",
    author: "Ethan Suzuki",
    price: 1139,
    oldPrice: 1319,
    rating: 4.5,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-76-the-cipher-of-numbers/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 77,
    title: "The River of Grace",
    author: "Chloe Carrington",
    price: 379,
    oldPrice: 529,
    rating: 4.9,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-77-the-river-of-grace/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 78,
    title: "Machine of Machines",
    author: "Nadia Nakamura",
    price: 449,
    oldPrice: 669,
    rating: 4.8,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-78-machine-of-machines/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 79,
    title: "The Harbor of Shadows",
    author: "Zoe Larsson",
    price: 529,
    oldPrice: 729,
    rating: 4.5,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-79-the-harbor-of-shadows/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 80,
    title: "The Symphony of Numbers",
    author: "Amelia Cabrera",
    price: 1109,
    oldPrice: 1289,
    rating: 4.7,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-80-the-symphony-of-numbers/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 81,
    title: "Labyrinth before Data",
    author: "Tara Reyes",
    price: 609,
    oldPrice: 789,
    rating: 4.1,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-81-labyrinth-before-data/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 82,
    title: "The Tangled Reckoning",
    author: "Maya Moreau",
    price: 579,
    oldPrice: 729,
    rating: 4.1,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-82-the-tangled-reckoning/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 83,
    title: "The Mirror of Machines",
    author: "Sofia Callahan",
    price: 389,
    oldPrice: 589,
    rating: 4.1,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-83-the-mirror-of-machines/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 84,
    title: "The Sacred Covenant",
    author: "Victor Larsson",
    price: 489,
    oldPrice: 739,
    rating: 4.6,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-84-the-sacred-covenant/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 85,
    title: "The Dark Doctrine",
    author: "Clara Reyes",
    price: 459,
    oldPrice: 679,
    rating: 4.4,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-85-the-dark-doctrine/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 86,
    title: "Current within Memory",
    author: "Amara Sharma",
    price: 769,
    oldPrice: 969,
    rating: 4.8,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-86-current-within-memory/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 87,
    title: "The Burning Ledger",
    author: "Clara Larsson",
    price: 819,
    oldPrice: 999,
    rating: 4.4,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-87-the-burning-ledger/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 88,
    title: "Current and Silence",
    author: "Tara Sinclair",
    price: 919,
    oldPrice: 1069,
    rating: 4.1,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-88-current-and-silence/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 89,
    title: "The River of Silence",
    author: "Anders Bennett",
    price: 769,
    oldPrice: 989,
    rating: 4.5,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-89-the-river-of-silence/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 90,
    title: "Mirror and Light",
    author: "Elena Delgado",
    price: 629,
    oldPrice: 849,
    rating: 4.3,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-90-mirror-and-light/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 91,
    title: "The Reckoning of Dreams",
    author: "Ethan Osei",
    price: 659,
    oldPrice: 839,
    rating: 5.0,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-91-the-reckoning-of-dreams/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 92,
    title: "The Legacy of Memory",
    author: "Chloe Sharma",
    price: 409,
    oldPrice: 659,
    rating: 4.5,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-92-the-legacy-of-memory/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 93,
    title: "The Orchard of Memory",
    author: "Ines Nakamura",
    price: 549,
    oldPrice: 699,
    rating: 4.6,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-93-the-orchard-of-memory/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 94,
    title: "The Machine of Light",
    author: "Lucas Callahan",
    price: 939,
    oldPrice: 1119,
    rating: 4.6,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-94-the-machine-of-light/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 95,
    title: "The Reckless Journey",
    author: "Sara Okafor",
    price: 959,
    oldPrice: 1209,
    rating: 4.5,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-95-the-reckless-journey/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 96,
    title: "Signal within Reason",
    author: "Anders Malik",
    price: 759,
    oldPrice: 939,
    rating: 4.7,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-96-signal-within-reason/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 97,
    title: "Current beyond Silence",
    author: "Elena Novak",
    price: 989,
    oldPrice: 1239,
    rating: 5.0,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-97-current-beyond-silence/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 98,
    title: "The Unseen Signal",
    author: "Ines Malik",
    price: 489,
    oldPrice: 689,
    rating: 4.9,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-98-the-unseen-signal/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 99,
    title: "The Radiant Empire",
    author: "Yuki Novak",
    price: 909,
    oldPrice: 1109,
    rating: 4.6,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-99-the-radiant-empire/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 100,
    title: "The Paradox of Time",
    author: "Rafael Bergman",
    price: 1039,
    oldPrice: 1189,
    rating: 4.9,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-100-the-paradox-of-time/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 101,
    title: "The Lost Shadow",
    author: "Amara Lindqvist",
    price: 929,
    oldPrice: 1109,
    rating: 4.3,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-101-the-lost-shadow/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 102,
    title: "The Signal of Reason",
    author: "Victor Okafor",
    price: 1009,
    oldPrice: 1209,
    rating: 4.5,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-102-the-signal-of-reason/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 103,
    title: "Mirror of Fire",
    author: "Felix Sharma",
    price: 359,
    oldPrice: 559,
    rating: 4.8,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-103-mirror-of-fire/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 104,
    title: "The Circuit of Stars",
    author: "Tara Larsson",
    price: 1079,
    oldPrice: 1299,
    rating: 4.6,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-104-the-circuit-of-stars/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 105,
    title: "The Broken Compass",
    author: "Amelia Sharma",
    price: 739,
    oldPrice: 989,
    rating: 4.6,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-105-the-broken-compass/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 106,
    title: "Harbor of Change",
    author: "Owen Callahan",
    price: 1169,
    oldPrice: 1319,
    rating: 4.9,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-106-harbor-of-change/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 107,
    title: "The Burning Kingdom",
    author: "Fatima Cabrera",
    price: 929,
    oldPrice: 1149,
    rating: 5.0,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-107-the-burning-kingdom/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 108,
    title: "The Compass of Machines",
    author: "Omar Callahan",
    price: 779,
    oldPrice: 929,
    rating: 4.2,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-108-the-compass-of-machines/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 109,
    title: "Doctrine within Machines",
    author: "Felix Bennett",
    price: 1169,
    oldPrice: 1319,
    rating: 4.4,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-109-doctrine-within-machines/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 110,
    title: "The Dark Archive",
    author: "Clara Haddad",
    price: 829,
    oldPrice: 1029,
    rating: 4.3,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-110-the-dark-archive/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 111,
    title: "The Frozen Garden",
    author: "Clara Delgado",
    price: 689,
    oldPrice: 889,
    rating: 4.9,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-111-the-frozen-garden/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 112,
    title: "Constellation within Data",
    author: "Aiden Okafor",
    price: 909,
    oldPrice: 1109,
    rating: 4.9,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-112-constellation-within-data/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 113,
    title: "The Lost Bridge",
    author: "Simon Malik",
    price: 399,
    oldPrice: 549,
    rating: 4.6,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-113-the-lost-bridge/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 114,
    title: "Algorithm before Grace",
    author: "Ines Reyes",
    price: 749,
    oldPrice: 999,
    rating: 4.2,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-114-algorithm-before-grace/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 115,
    title: "The Fierce River",
    author: "Theo Nilsson",
    price: 1179,
    oldPrice: 1429,
    rating: 4.7,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-115-the-fierce-river/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 116,
    title: "The Ledger of Dust",
    author: "Milo Nakamura",
    price: 1039,
    oldPrice: 1239,
    rating: 4.6,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-116-the-ledger-of-dust/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 117,
    title: "The Shadow of Change",
    author: "Ines Bergman",
    price: 1039,
    oldPrice: 1259,
    rating: 4.3,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-117-the-shadow-of-change/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 118,
    title: "The Empire of Power",
    author: "Noor Osei",
    price: 789,
    oldPrice: 1009,
    rating: 4.7,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-118-the-empire-of-power/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 119,
    title: "The Reckless Vault",
    author: "Rohan Delgado",
    price: 919,
    oldPrice: 1069,
    rating: 4.3,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-119-the-reckless-vault/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 120,
    title: "The Fierce Meridian",
    author: "Leila Winters",
    price: 689,
    oldPrice: 909,
    rating: 4.4,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-120-the-fierce-meridian/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 121,
    title: "The Signal of Data",
    author: "Zoe Sinclair",
    price: 1169,
    oldPrice: 1349,
    rating: 4.7,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-121-the-signal-of-data/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 122,
    title: "Blueprint within Grace",
    author: "Diego Nakamura",
    price: 1199,
    oldPrice: 1379,
    rating: 4.7,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-122-blueprint-within-grace/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 123,
    title: "The Rising Compass",
    author: "Marcus Sharma",
    price: 609,
    oldPrice: 829,
    rating: 4.6,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-123-the-rising-compass/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 124,
    title: "The Bright Doctrine",
    author: "Nadia Osei",
    price: 1089,
    oldPrice: 1309,
    rating: 4.5,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-124-the-bright-doctrine/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 125,
    title: "The Endless River",
    author: "Amara Cabrera",
    price: 789,
    oldPrice: 969,
    rating: 4.2,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-125-the-endless-river/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 126,
    title: "The Paradox of Ashes",
    author: "Daniel Larsson",
    price: 609,
    oldPrice: 759,
    rating: 4.5,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-126-the-paradox-of-ashes/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 127,
    title: "Paradox after Grace",
    author: "Chloe Cabrera",
    price: 809,
    oldPrice: 1059,
    rating: 4.8,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-127-paradox-after-grace/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 128,
    title: "The Symphony of Power",
    author: "Tara Callahan",
    price: 519,
    oldPrice: 739,
    rating: 4.5,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-128-the-symphony-of-power/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 129,
    title: "The Sacred Paradox",
    author: "Kenji Winters",
    price: 599,
    oldPrice: 799,
    rating: 4.4,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-129-the-sacred-paradox/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 130,
    title: "The Empire of Machines",
    author: "Felix Hartley",
    price: 689,
    oldPrice: 939,
    rating: 4.1,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-130-the-empire-of-machines/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 131,
    title: "The Frozen Threshold",
    author: "Ethan Petrov",
    price: 579,
    oldPrice: 729,
    rating: 4.4,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-131-the-frozen-threshold/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 132,
    title: "Legacy before Fire",
    author: "Daniel Osei",
    price: 789,
    oldPrice: 1009,
    rating: 4.9,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-132-legacy-before-fire/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 133,
    title: "The Garden of Truth",
    author: "Naomi Carrington",
    price: 369,
    oldPrice: 569,
    rating: 4.3,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-133-the-garden-of-truth/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 134,
    title: "Doctrine after Power",
    author: "Leila Callahan",
    price: 579,
    oldPrice: 799,
    rating: 4.2,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-134-doctrine-after-power/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 135,
    title: "Covenant of Light",
    author: "Diego Okafor",
    price: 1049,
    oldPrice: 1269,
    rating: 4.7,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-135-covenant-of-light/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 136,
    title: "Harbor after Power",
    author: "Marcus Nilsson",
    price: 759,
    oldPrice: 1009,
    rating: 4.6,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-136-harbor-after-power/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 137,
    title: "The Golden Symphony",
    author: "Noor Ferreira",
    price: 829,
    oldPrice: 1009,
    rating: 4.1,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-137-the-golden-symphony/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 138,
    title: "Algorithm and Ashes",
    author: "Chloe Hartley",
    price: 1139,
    oldPrice: 1359,
    rating: 4.3,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-138-algorithm-and-ashes/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 139,
    title: "Circuit of Dreams",
    author: "Marcus Lindqvist",
    price: 909,
    oldPrice: 1059,
    rating: 5.0,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-139-circuit-of-dreams/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 140,
    title: "Archive within Silence",
    author: "Priya Cabrera",
    price: 389,
    oldPrice: 569,
    rating: 4.2,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-140-archive-within-silence/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 141,
    title: "The Reckless Compass",
    author: "Anders Kowalski",
    price: 839,
    oldPrice: 989,
    rating: 4.6,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-141-the-reckless-compass/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 142,
    title: "The Bright Circuit",
    author: "Owen Bennett",
    price: 979,
    oldPrice: 1229,
    rating: 5.0,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-142-the-bright-circuit/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 143,
    title: "The Shadow of Stars",
    author: "Rohan Reyes",
    price: 949,
    oldPrice: 1099,
    rating: 4.9,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-143-the-shadow-of-stars/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 144,
    title: "The Threshold of Light",
    author: "Clara Nakamura",
    price: 969,
    oldPrice: 1149,
    rating: 4.1,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-144-the-threshold-of-light/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 145,
    title: "Cipher of Truth",
    author: "Priya Suzuki",
    price: 899,
    oldPrice: 1119,
    rating: 4.7,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-145-cipher-of-truth/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 146,
    title: "The Whispering Ledger",
    author: "Elena Ferreira",
    price: 789,
    oldPrice: 1009,
    rating: 4.1,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-146-the-whispering-ledger/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 147,
    title: "Current within Shadows",
    author: "Milo Bennett",
    price: 1109,
    oldPrice: 1359,
    rating: 5.0,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-147-current-within-shadows/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 148,
    title: "Tapestry after Dreams",
    author: "Gabriel Whitfield",
    price: 1199,
    oldPrice: 1449,
    rating: 4.3,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-148-tapestry-after-dreams/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 149,
    title: "The Golden Equation",
    author: "Tara Fischer",
    price: 1129,
    oldPrice: 1349,
    rating: 4.6,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-149-the-golden-equation/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 150,
    title: "The Threshold of Reason",
    author: "Marcus Carrington",
    price: 689,
    oldPrice: 869,
    rating: 4.5,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-150-the-threshold-of-reason/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 151,
    title: "Circuit beyond Money",
    author: "Leila Petrov",
    price: 639,
    oldPrice: 889,
    rating: 4.0,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-151-circuit-beyond-money/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 152,
    title: "The Golden Machine",
    author: "Sara Carrington",
    price: 929,
    oldPrice: 1109,
    rating: 4.7,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-152-the-golden-machine/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 153,
    title: "The Covenant of Ashes",
    author: "Marcus Nakamura",
    price: 659,
    oldPrice: 839,
    rating: 4.4,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-153-the-covenant-of-ashes/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 154,
    title: "The Midnight Meridian",
    author: "Owen Carrington",
    price: 929,
    oldPrice: 1179,
    rating: 4.3,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-154-the-midnight-meridian/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 155,
    title: "The Reckoning of Reason",
    author: "Fatima Petrov",
    price: 819,
    oldPrice: 1019,
    rating: 4.3,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-155-the-reckoning-of-reason/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 156,
    title: "The First Ledger",
    author: "Chloe Reyes",
    price: 1119,
    oldPrice: 1369,
    rating: 5.0,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-156-the-first-ledger/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 157,
    title: "The Bridge of Numbers",
    author: "Victor Lindqvist",
    price: 849,
    oldPrice: 1049,
    rating: 4.7,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-157-the-bridge-of-numbers/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 158,
    title: "The Cipher of Change",
    author: "Amara Haddad",
    price: 559,
    oldPrice: 759,
    rating: 4.2,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-158-the-cipher-of-change/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 159,
    title: "The Midnight River",
    author: "Amelia Kowalski",
    price: 639,
    oldPrice: 789,
    rating: 5.0,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-159-the-midnight-river/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 160,
    title: "The Empire of Shadows",
    author: "Kenji Reyes",
    price: 369,
    oldPrice: 619,
    rating: 4.3,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-160-the-empire-of-shadows/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 161,
    title: "Ember beyond Stars",
    author: "Daniel Malik",
    price: 849,
    oldPrice: 999,
    rating: 4.8,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-161-ember-beyond-stars/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 162,
    title: "Covenant of Truth",
    author: "Daniel Kowalski",
    price: 509,
    oldPrice: 759,
    rating: 4.9,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-162-covenant-of-truth/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 163,
    title: "The Burning Shadow",
    author: "Rafael Cabrera",
    price: 789,
    oldPrice: 1039,
    rating: 4.6,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-163-the-burning-shadow/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 164,
    title: "The Archive of Data",
    author: "Naomi Novak",
    price: 809,
    oldPrice: 1009,
    rating: 4.9,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-164-the-archive-of-data/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 165,
    title: "Frontier after Grace",
    author: "Daniel Castillo",
    price: 1119,
    oldPrice: 1269,
    rating: 4.9,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-165-frontier-after-grace/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 166,
    title: "The Shattered Circuit",
    author: "James Bennett",
    price: 599,
    oldPrice: 779,
    rating: 4.6,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-166-the-shattered-circuit/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 167,
    title: "The Silent Doctrine",
    author: "Tara Petrov",
    price: 969,
    oldPrice: 1189,
    rating: 4.3,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-167-the-silent-doctrine/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 168,
    title: "The Crimson Empire",
    author: "Gabriel Nakamura",
    price: 1059,
    oldPrice: 1239,
    rating: 4.9,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-168-the-crimson-empire/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 169,
    title: "The Meridian of Numbers",
    author: "Milo Reyes",
    price: 919,
    oldPrice: 1099,
    rating: 4.6,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-169-the-meridian-of-numbers/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 170,
    title: "Compass of Memory",
    author: "Rohan Castillo",
    price: 1129,
    oldPrice: 1379,
    rating: 4.9,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-170-compass-of-memory/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 171,
    title: "Shadow before Change",
    author: "Aiden Malik",
    price: 869,
    oldPrice: 1119,
    rating: 4.5,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-171-shadow-before-change/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 172,
    title: "The Steady Horizon",
    author: "Milo Lindqvist",
    price: 689,
    oldPrice: 939,
    rating: 4.3,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-172-the-steady-horizon/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 173,
    title: "The Frozen Vault",
    author: "Simon Voss",
    price: 1139,
    oldPrice: 1339,
    rating: 4.6,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-173-the-frozen-vault/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 174,
    title: "The Dark Paradox",
    author: "Tara Nilsson",
    price: 639,
    oldPrice: 819,
    rating: 5.0,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-174-the-dark-paradox/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 175,
    title: "Covenant of Dreams",
    author: "Fatima Whitfield",
    price: 699,
    oldPrice: 899,
    rating: 4.7,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-175-covenant-of-dreams/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 176,
    title: "The Wandering Doctrine",
    author: "Kenji Bergman",
    price: 1039,
    oldPrice: 1259,
    rating: 4.8,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-176-the-wandering-doctrine/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 177,
    title: "The Horizon of Ashes",
    author: "James Hartley",
    price: 619,
    oldPrice: 819,
    rating: 4.1,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-177-the-horizon-of-ashes/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 178,
    title: "Blueprint of Power",
    author: "Theo Suzuki",
    price: 999,
    oldPrice: 1219,
    rating: 4.6,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-178-blueprint-of-power/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 179,
    title: "The Shattered Equation",
    author: "Rafael Kowalski",
    price: 649,
    oldPrice: 869,
    rating: 4.9,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-179-the-shattered-equation/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 180,
    title: "Shadow of Grace",
    author: "Anders Petrov",
    price: 519,
    oldPrice: 719,
    rating: 4.6,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-180-shadow-of-grace/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 181,
    title: "The Doctrine of Silence",
    author: "Maya Haddad",
    price: 469,
    oldPrice: 689,
    rating: 4.9,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-181-the-doctrine-of-silence/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 182,
    title: "The Compass of Dreams",
    author: "Ingrid Adeyemi",
    price: 1079,
    oldPrice: 1279,
    rating: 4.4,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-182-the-compass-of-dreams/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 183,
    title: "Passage and Ashes",
    author: "Naomi Osei",
    price: 969,
    oldPrice: 1219,
    rating: 4.7,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-183-passage-and-ashes/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 184,
    title: "The Broken Equation",
    author: "Sara Hartley",
    price: 1169,
    oldPrice: 1419,
    rating: 4.3,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-184-the-broken-equation/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 185,
    title: "The Crimson Frontier",
    author: "Simon Moreau",
    price: 1029,
    oldPrice: 1249,
    rating: 4.9,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-185-the-crimson-frontier/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 186,
    title: "Legacy before Dust",
    author: "Diego Larsson",
    price: 1139,
    oldPrice: 1389,
    rating: 4.4,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-186-legacy-before-dust/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 187,
    title: "Ledger within Machines",
    author: "Nadia Delgado",
    price: 599,
    oldPrice: 819,
    rating: 4.0,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-187-ledger-within-machines/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 188,
    title: "The Passage of Light",
    author: "Naomi Okafor",
    price: 1169,
    oldPrice: 1349,
    rating: 4.5,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-188-the-passage-of-light/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 189,
    title: "The Quiet Blueprint",
    author: "Simon Hartley",
    price: 459,
    oldPrice: 679,
    rating: 4.1,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-189-the-quiet-blueprint/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 190,
    title: "River within Shadows",
    author: "Sara Ferreira",
    price: 1029,
    oldPrice: 1209,
    rating: 4.1,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-190-river-within-shadows/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 191,
    title: "Ledger after Light",
    author: "James Ferreira",
    price: 689,
    oldPrice: 939,
    rating: 4.4,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-191-ledger-after-light/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 192,
    title: "Covenant after Memory",
    author: "Oscar Nakamura",
    price: 599,
    oldPrice: 799,
    rating: 5.0,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-192-covenant-after-memory/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 193,
    title: "The Journey of Fire",
    author: "Amara Novak",
    price: 529,
    oldPrice: 729,
    rating: 4.9,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-193-the-journey-of-fire/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 194,
    title: "The Restless Mirror",
    author: "Ingrid Suzuki",
    price: 739,
    oldPrice: 959,
    rating: 4.1,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-194-the-restless-mirror/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 195,
    title: "The Doctrine of Truth",
    author: "Omar Bennett",
    price: 539,
    oldPrice: 689,
    rating: 4.6,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-195-the-doctrine-of-truth/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 196,
    title: "Tapestry within Machines",
    author: "Kenji Nilsson",
    price: 959,
    oldPrice: 1139,
    rating: 4.2,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-196-tapestry-within-machines/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 197,
    title: "The Circuit of Ashes",
    author: "Layla Okafor",
    price: 369,
    oldPrice: 589,
    rating: 4.9,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-197-the-circuit-of-ashes/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 198,
    title: "The Legacy of Stars",
    author: "Sofia Novak",
    price: 709,
    oldPrice: 959,
    rating: 4.3,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-198-the-legacy-of-stars/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 199,
    title: "Circuit before Change",
    author: "Zoe Reyes",
    price: 599,
    oldPrice: 819,
    rating: 4.6,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-199-circuit-before-change/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 200,
    title: "The Empire of Change",
    author: "Marcus Haddad",
    price: 1029,
    oldPrice: 1249,
    rating: 4.3,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-200-the-empire-of-change/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 201,
    title: "The Mirror of Grace",
    author: "Kenji Haddad",
    price: 649,
    oldPrice: 829,
    rating: 4.6,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-201-the-mirror-of-grace/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 202,
    title: "Archive within Numbers",
    author: "Oscar Malik",
    price: 1049,
    oldPrice: 1229,
    rating: 4.6,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-202-archive-within-numbers/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 203,
    title: "The Horizon of Change",
    author: "Tara Sharma",
    price: 949,
    oldPrice: 1149,
    rating: 4.7,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-203-the-horizon-of-change/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 204,
    title: "The Crimson Algorithm",
    author: "Sara Bennett",
    price: 559,
    oldPrice: 739,
    rating: 4.8,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-204-the-crimson-algorithm/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 205,
    title: "Paradox after Money",
    author: "Yuki Malik",
    price: 1199,
    oldPrice: 1419,
    rating: 5.0,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-205-paradox-after-money/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 206,
    title: "Ledger of Ashes",
    author: "Sofia Kowalski",
    price: 1129,
    oldPrice: 1309,
    rating: 4.9,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-206-ledger-of-ashes/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 207,
    title: "The Chronicle of Power",
    author: "Owen Nakamura",
    price: 1169,
    oldPrice: 1389,
    rating: 4.0,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-207-the-chronicle-of-power/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 208,
    title: "The Shadow of Ashes",
    author: "Owen Okafor",
    price: 1129,
    oldPrice: 1329,
    rating: 4.6,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-208-the-shadow-of-ashes/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 209,
    title: "The Labyrinth of Tomorrow",
    author: "Maya Carrington",
    price: 379,
    oldPrice: 629,
    rating: 4.9,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-209-the-labyrinth-of-tomorrow/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 210,
    title: "The Algorithm of Grace",
    author: "Maya Winters",
    price: 419,
    oldPrice: 639,
    rating: 4.9,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-210-the-algorithm-of-grace/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 211,
    title: "Doctrine of Shadows",
    author: "Priya Sharma",
    price: 669,
    oldPrice: 889,
    rating: 4.1,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-211-doctrine-of-shadows/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 212,
    title: "The Unseen Harbor",
    author: "Amelia Whitfield",
    price: 959,
    oldPrice: 1139,
    rating: 4.9,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-212-the-unseen-harbor/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 213,
    title: "The Kingdom of Dreams",
    author: "Oscar Whitfield",
    price: 649,
    oldPrice: 799,
    rating: 4.7,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-213-the-kingdom-of-dreams/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 214,
    title: "The Hollow Ember",
    author: "Anders Ferreira",
    price: 729,
    oldPrice: 879,
    rating: 5.0,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-214-the-hollow-ember/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 215,
    title: "Legacy within Dust",
    author: "Daniel Delgado",
    price: 639,
    oldPrice: 819,
    rating: 5.0,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-215-legacy-within-dust/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 216,
    title: "Journey within Numbers",
    author: "Leila Voss",
    price: 409,
    oldPrice: 609,
    rating: 4.2,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-216-journey-within-numbers/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 217,
    title: "The Woven Signal",
    author: "Sofia Haddad",
    price: 1139,
    oldPrice: 1389,
    rating: 4.2,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-217-the-woven-signal/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 218,
    title: "The Frozen Ledger",
    author: "Ethan Sinclair",
    price: 969,
    oldPrice: 1119,
    rating: 4.3,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-218-the-frozen-ledger/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 219,
    title: "The Quiet Legacy",
    author: "Layla Sinclair",
    price: 539,
    oldPrice: 689,
    rating: 4.7,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-219-the-quiet-legacy/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 220,
    title: "The Quiet River",
    author: "Fatima Sinclair",
    price: 1169,
    oldPrice: 1349,
    rating: 4.6,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-220-the-quiet-river/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 221,
    title: "The Fading Circuit",
    author: "Sara Adeyemi",
    price: 469,
    oldPrice: 619,
    rating: 4.5,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-221-the-fading-circuit/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 222,
    title: "Blueprint after Tomorrow",
    author: "Tara Adeyemi",
    price: 589,
    oldPrice: 839,
    rating: 4.0,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-222-blueprint-after-tomorrow/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 223,
    title: "The Paradox of Change",
    author: "Gabriel Winters",
    price: 389,
    oldPrice: 539,
    rating: 5.0,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-223-the-paradox-of-change/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 224,
    title: "Symphony within Tomorrow",
    author: "Kenji Petrov",
    price: 809,
    oldPrice: 959,
    rating: 4.9,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-224-symphony-within-tomorrow/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 225,
    title: "Cipher and Silence",
    author: "Noor Malik",
    price: 999,
    oldPrice: 1249,
    rating: 4.5,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-225-cipher-and-silence/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 226,
    title: "Threshold after Data",
    author: "Ingrid Novak",
    price: 879,
    oldPrice: 1129,
    rating: 4.4,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-226-threshold-after-data/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 227,
    title: "The Shadow of Power",
    author: "Victor Whitfield",
    price: 819,
    oldPrice: 999,
    rating: 4.4,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-227-the-shadow-of-power/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 228,
    title: "Chronicle before Tomorrow",
    author: "Chloe Whitfield",
    price: 679,
    oldPrice: 879,
    rating: 4.4,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-228-chronicle-before-tomorrow/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 229,
    title: "The Dark Storm",
    author: "James Haddad",
    price: 449,
    oldPrice: 599,
    rating: 4.4,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-229-the-dark-storm/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 230,
    title: "The Labyrinth of Shadows",
    author: "Rafael Sharma",
    price: 959,
    oldPrice: 1209,
    rating: 4.6,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-230-the-labyrinth-of-shadows/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 231,
    title: "The Shadow of Fire",
    author: "Fatima Ferreira",
    price: 1039,
    oldPrice: 1259,
    rating: 4.9,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-231-the-shadow-of-fire/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 232,
    title: "The Mirror of Change",
    author: "Leila Bergman",
    price: 719,
    oldPrice: 869,
    rating: 4.6,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-232-the-mirror-of-change/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 233,
    title: "The Endless Passage",
    author: "Maya Ferreira",
    price: 469,
    oldPrice: 669,
    rating: 4.8,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-233-the-endless-passage/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 234,
    title: "Shadow beyond Truth",
    author: "Maya Sinclair",
    price: 799,
    oldPrice: 1049,
    rating: 5.0,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-234-shadow-beyond-truth/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 235,
    title: "The Tapestry of Power",
    author: "Marcus Castillo",
    price: 1029,
    oldPrice: 1229,
    rating: 4.0,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-235-the-tapestry-of-power/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 236,
    title: "Frontier beyond Dust",
    author: "Elena Bennett",
    price: 509,
    oldPrice: 759,
    rating: 4.7,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-236-frontier-beyond-dust/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 237,
    title: "The Endless Garden",
    author: "James Lindqvist",
    price: 899,
    oldPrice: 1079,
    rating: 4.4,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-237-the-endless-garden/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 238,
    title: "Ledger and Dust",
    author: "Rohan Lindqvist",
    price: 689,
    oldPrice: 939,
    rating: 4.6,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-238-ledger-and-dust/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 239,
    title: "The Endless Orchard",
    author: "Oscar Sharma",
    price: 1049,
    oldPrice: 1199,
    rating: 4.3,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-239-the-endless-orchard/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 240,
    title: "The Symphony of Dreams",
    author: "Leila Novak",
    price: 779,
    oldPrice: 979,
    rating: 4.2,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-240-the-symphony-of-dreams/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 241,
    title: "The Shadow of Dust",
    author: "Ingrid Okafor",
    price: 1049,
    oldPrice: 1299,
    rating: 4.5,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-241-the-shadow-of-dust/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 242,
    title: "The Frontier of Memory",
    author: "Maya Delgado",
    price: 969,
    oldPrice: 1119,
    rating: 4.0,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-242-the-frontier-of-memory/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 243,
    title: "Signal and Money",
    author: "Ingrid Hartley",
    price: 479,
    oldPrice: 629,
    rating: 4.5,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-243-signal-and-money/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 244,
    title: "Bridge and Light",
    author: "Amelia Petrov",
    price: 589,
    oldPrice: 839,
    rating: 4.6,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-244-bridge-and-light/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 245,
    title: "The Constellation of Silence",
    author: "Aiden Ferreira",
    price: 1119,
    oldPrice: 1269,
    rating: 4.4,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-245-the-constellation-of-silence/500/700",
  },


  // =========================
  // HISTORY
  // =========================

  {
    id: 246,
    title: "Storm beyond Truth",
    author: "Milo Moreau",
    price: 769,
    oldPrice: 989,
    rating: 4.3,
    category: "History",
    cover:
      "https://picsum.photos/seed/book-246-storm-beyond-truth/500/700",
  },


  // =========================
  // ACADEMIC
  // =========================

  {
    id: 247,
    title: "Garden beyond Stars",
    author: "Oscar Novak",
    price: 1069,
    oldPrice: 1269,
    rating: 4.1,
    category: "Academic",
    cover:
      "https://picsum.photos/seed/book-247-garden-beyond-stars/500/700",
  },


  // =========================
  // SCIENCE
  // =========================

  {
    id: 248,
    title: "The Burning Symphony",
    author: "Simon Delgado",
    price: 889,
    oldPrice: 1039,
    rating: 4.4,
    category: "Science",
    cover:
      "https://picsum.photos/seed/book-248-the-burning-symphony/500/700",
  },


  // =========================
  // SCIENCE FICTION
  // =========================

  {
    id: 249,
    title: "Ledger and Reason",
    author: "Yuki Nakamura",
    price: 879,
    oldPrice: 1029,
    rating: 4.5,
    category: "Science Fiction",
    cover:
      "https://picsum.photos/seed/book-249-ledger-and-reason/500/700",
  },


  // =========================
  // PROGRAMMING
  // =========================

  {
    id: 250,
    title: "The Ancient Constellation",
    author: "Ethan Fischer",
    price: 459,
    oldPrice: 639,
    rating: 4.3,
    category: "Programming",
    cover:
      "https://picsum.photos/seed/book-250-the-ancient-constellation/500/700",
  },


  // =========================
  // TECHNOLOGY
  // =========================

  {
    id: 251,
    title: "The Steady Compass",
    author: "Sofia Bennett",
    price: 1149,
    oldPrice: 1369,
    rating: 4.5,
    category: "Technology",
    cover:
      "https://picsum.photos/seed/book-251-the-steady-compass/500/700",
  },


  // =========================
  // SELF DEVELOPMENT
  // =========================

  {
    id: 252,
    title: "The Meridian of Ashes",
    author: "Nadia Winters",
    price: 1009,
    oldPrice: 1259,
    rating: 4.3,
    category: "Self Development",
    cover:
      "https://picsum.photos/seed/book-252-the-meridian-of-ashes/500/700",
  },


  // =========================
  // FINANCE
  // =========================

  {
    id: 253,
    title: "The Algorithm of Shadows",
    author: "Tara Nakamura",
    price: 839,
    oldPrice: 1059,
    rating: 4.6,
    category: "Finance",
    cover:
      "https://picsum.photos/seed/book-253-the-algorithm-of-shadows/500/700",
  },


  // =========================
  // ROMANCE
  // =========================

  {
    id: 254,
    title: "Meridian of Dust",
    author: "Rohan Novak",
    price: 819,
    oldPrice: 969,
    rating: 4.1,
    category: "Romance",
    cover:
      "https://picsum.photos/seed/book-254-meridian-of-dust/500/700",
  },


  // =========================
  // MYSTERY
  // =========================

  {
    id: 255,
    title: "Storm within Silence",
    author: "Oscar Castillo",
    price: 879,
    oldPrice: 1099,
    rating: 4.5,
    category: "Mystery",
    cover:
      "https://picsum.photos/seed/book-255-storm-within-silence/500/700",
  },


  // =========================
  // FANTASY
  // =========================

  {
    id: 256,
    title: "The Ledger of Reason",
    author: "Leila Carrington",
    price: 869,
    oldPrice: 1049,
    rating: 5.0,
    category: "Fantasy",
    cover:
      "https://picsum.photos/seed/book-256-the-ledger-of-reason/500/700",
  },


  // =========================
  // BIOGRAPHY
  // =========================

  {
    id: 257,
    title: "Kingdom beyond Silence",
    author: "Ines Winters",
    price: 529,
    oldPrice: 679,
    rating: 4.2,
    category: "Biography",
    cover:
      "https://picsum.photos/seed/book-257-kingdom-beyond-silence/500/700",
  },
];

export { books };

export default books;

export const categories = [
  "Programming",
  "Technology",
  "Self Development",
  "Finance",
  "Romance",
  "Mystery",
  "Fantasy",
  "Biography",
  "History",
  "Academic",
  "Science",
  "Science Fiction",
];