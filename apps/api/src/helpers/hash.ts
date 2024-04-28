import bcrypt from 'bcrypt';
const saltRounds = 5;

interface IComparePasswordParams {
  passwordFromClient: string;
  passwordFromDatabase: string;
}

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async ({
  passwordFromClient,
  passwordFromDatabase,
}: IComparePasswordParams) => {
  return await bcrypt.compare(passwordFromClient, passwordFromDatabase);
};
