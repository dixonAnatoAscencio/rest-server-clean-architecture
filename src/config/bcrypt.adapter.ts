import { compareSync, genSaltSync, hash } from "bcryptjs";

export const bcryptAdapter = {
  hash: (password: string) => {
    const salt = genSaltSync(10);
    return hash(password, salt);
  },

  compare: (password: string, hash: string) => {
    return compareSync(password, hash);
  },
};
