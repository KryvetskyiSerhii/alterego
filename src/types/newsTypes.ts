export interface NewsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface NewsProps {
  newsData: NewsData[];
  status: "pending" | "fulfilled" | "rejected";
}
