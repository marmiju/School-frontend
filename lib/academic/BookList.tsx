 interface BookType {
  class: string;
  session: string;
  date: string;
  url: string;
}


const BookList = () => {
  const bookList: BookType[] = [
    {
      "class": "ষষ্ঠ শ্রেণী",
      "session": "২০২৩-২৪",
      "date": "01/01/2023",
      "url": "https://github.com/Syed007Hassan/Fast-Material-CS-SE/blob/main/1ST%20SEMESTER/EE117%20APPLIED%20PHYSICS/Sol%20of%20Physics%20book.pdf"
    },
    
    {
      "class": "৯ম শ্রেণী (বিজ্ঞান)",
      "session": "২০২৩-২৪",
      "date": "01/01/2023",
      "url": "https://www.nctb.gov.bd/sites/default/files/files/nctb.portal.gov.bd/books/3fd92b67_5.pdf"
    },
    {
      "class": "৯ম শ্রেণী (ব্যবসা)",
      "session": "২০২৩-২৪",
      "date": "01/01/2023",
      "url": "https://www.nctb.gov.bd/sites/default/files/files/nctb.portal.gov.bd/books/788b40b4_6.pdf"
    },
    {
      "class": "১০ম শ্রেণী (মানবিক)",
      "session": "২০২৩-২৪",
      "date": "01/01/2023",
      "url": "https://www.nctb.gov.bd/sites/default/files/files/nctb.portal.gov.bd/books/bf92375c_7.pdf"
    },
    {
      "class": "১০ম শ্রেণী (বিজ্ঞান)",
      "session": "২০২৩-২৪",
      "date": "01/01/2023",
      "url": "https://www.nctb.gov.bd/sites/default/files/files/nctb.portal.gov.bd/books/47adf98b_8.pdf"
    }
  ]

  return bookList
};

export default BookList;