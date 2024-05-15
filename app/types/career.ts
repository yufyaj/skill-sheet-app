export type Career = {
  id: number;
  title: string;
  description: string;
};

export type CareerData = {
  id: number;
  careers: Career[];
};

export type GetCareerRequest = {
  userId: number;
};

export type PostCareerRequest = {
  userId: number;
} & Omit<Career, "id">;
