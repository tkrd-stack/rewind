export interface Summaries {
  _id: string;
  userId: string;
  date: Date;
  summary: string;
  categories: {
    label: string;
    icon: string;
    text: string;
  };
  createdAt: Date;
}
