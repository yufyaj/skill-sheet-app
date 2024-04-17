import { Career, CareerData, CareerRequest } from "./types/career";
import { LoginUser, User } from "./types/user";

const user: User = {
  id: 1,
  email: "japalopers@example.com",
  password: "japalopers",
};
export const testLogin = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return true;
};

export const login = async (loginUser: LoginUser) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (loginUser.email === user.email && loginUser.password === user.password) {
    return true;
  }
  return false;
};

const careers: CareerData[] = [
  {
    id: 1,
    careers: [
      {
        id: 1,
        title: "Skill Sheet App",
        description: "Remixを使って開発した",
      },
      {
        id: 2,
        title: "Japalopers Community",
        description: "Remixを使って開発した",
      },
    ],
  },
  {
    id: 2,
    careers: [
      {
        id: 1,
        title: "Hogex",
        description: "Remixを使って開発した",
      },
      {
        id: 2,
        title: "Japalopers Community",
        description: "Remixを使って開発した",
      },
    ],
  },
];

export const getCareers = async (
  getCareerRequest: CareerRequest
): Promise<Career[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const career = careers.filter(
    (career) => career.id === getCareerRequest.userId
  );
  return career[0].careers;
};
