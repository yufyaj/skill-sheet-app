import {
  Career,
  CareerData,
  DeleteCareerRequest,
  GetCareerRequest,
  GetCareersRequest,
  PostCareerRequest,
  UpdateCareerRequest,
} from "./types/career";
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
        description:
          "Remixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発したRemixを使って開発した",
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
  getCareerRequest: GetCareersRequest
): Promise<Career[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const career = careers.filter(
    (career) => career.id === getCareerRequest.userId
  );
  return career[0].careers;
};

export const getCareer = async (
  getCareerRequest: GetCareerRequest
): Promise<Career> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const targetCareers = careers.find(
    (career) => career.id === getCareerRequest.userId
  );

  const career = targetCareers?.careers?.find(
    (career) => career.id === getCareerRequest.id
  );

  if (!career) {
    throw new Error("Career not found");
  }

  return career;
};

export const postCareer = async (
  postCareerRequest: PostCareerRequest
): Promise<Career> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const targetCareers = careers.filter(
    (career) => career.id === postCareerRequest.userId
  );
  const nextIndex = targetCareers.length + 1;
  const newCareer: Career = {
    id: nextIndex,
    title: postCareerRequest.title,
    description: postCareerRequest.description,
  };
  careers.map((career) => {
    if (career.id === postCareerRequest.userId) {
      career.careers.push(newCareer);
    }
  });
  return newCareer;
};

export const updateCareer = async (
  updateCareerRequest: UpdateCareerRequest
): Promise<Career> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const targetCareers = careers.find(
    (career) => career.id === updateCareerRequest.userId
  );
  const targetCareer = targetCareers?.careers.find(
    (career) => career.id === updateCareerRequest.id
  );

  if (!targetCareer) {
    throw new Error("Career not found");
  }

  targetCareer.title = updateCareerRequest.title;
  targetCareer.description = updateCareerRequest.description;

  careers.map((career) => {
    if (career.id === updateCareerRequest.userId) {
      const index = career.careers.findIndex(
        (c) => c.id === updateCareerRequest.id
      );
      if (index !== -1) {
        career.careers[index] = targetCareer;
      }
    }
  });

  return targetCareer;
};

export const deleteCareer = async (
  deleteCareerRequest: DeleteCareerRequest
): Promise<Career> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const targetCareers = careers.find(
    (career) => career.id === deleteCareerRequest.userId
  );

  if (!targetCareers) {
    throw new Error("Unauthenticated");
  }

  const careerIndex = targetCareers.careers.findIndex(
    (career) => career.id === deleteCareerRequest.id
  );

  if (careerIndex === -1) {
    throw new Error("Career not found");
  }

  const deletedCareer = targetCareers.careers.splice(careerIndex, 1)[0];

  return deletedCareer;
};
