interface Author {
  name: string;
  avatar: string;
}

export interface Article {
  title: string;
  banner: string;
  content: string;
  datePosted: string;
  author: Author;
  readTime: string;
}
