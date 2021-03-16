export const findInRecord = (key: string, record: Record<string, any>) =>
  Object.keys(record).some((item) => item === key);
