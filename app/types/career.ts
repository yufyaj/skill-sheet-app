export type Career = {
  id: number;
  title: string;
  description: string;
};

export type CareerData = {
  id: number;
  careers: Career[];
};

export type CareerRequest = {
  userId: number;
};
