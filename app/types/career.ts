export type Career = {
  id: string;
  title?: string;
  description?: string;
};

export type CareerData = {
  userId: number;
  careers: Career[];
};

export type GetCareersRequest = {
  userId: number;
};

export type GetCareerRequest = {
  userId: number;
} & Pick<Career, "id">;

export type PostCareerRequest = {
  userId: number;
} & Omit<Career, "id">;

export type UpdateCareerRequest = {
  userId: number;
} & Career;

export type DeleteCareerRequest = {
  userId: number;
} & Pick<Career, "id">;
