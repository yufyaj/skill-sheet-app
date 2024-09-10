export type User = {
  id: number;
  email: string;
  password: string;
};

export type LoginUser = Pick<User, "email" | "password">;
