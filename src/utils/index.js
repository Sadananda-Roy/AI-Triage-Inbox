export function getTimeAgo(time) {
  const now = new Date();
  const receivedTime = new Date(time);

  //   const diff = now - receivedTime; //returns ms

  //   const diffInSeconds = diff / 1000; //1s = 1000ms

  //   const diffInMinutes = diffInSeconds / 60;

  const diffInMinutes = Math.floor((now - receivedTime) / (1000 * 60));

  const minutes = diffInMinutes % 60;
  const hours = Math.floor((diffInMinutes % (24 * 60)) / 60);
  const days = Math.floor(diffInMinutes / (24 * 60));

  if (days > 0) return `${days}d ${hours}h ago`;
  if (hours > 0) return `${hours}h ${minutes}m ago`;
  return `${minutes}m ago`;
}
