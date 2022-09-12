export const getRandomNum = (number) => {
  return Math.ceil(Math.random() * number);
};

export const getTimeOfDay = () => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  if (hour >= 18 && hour <= 23) return "evening";
  if (hour >= 0 && hour < 6) return "night";
};
