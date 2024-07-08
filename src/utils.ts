export const stringHash = (str: string) => {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = hash + str.charCodeAt(i) + i;
  }

  hash += Math.floor(Math.random() * 1000);

  return hash.toString();
};
