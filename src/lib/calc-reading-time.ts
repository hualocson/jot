interface IReadingTimeOptions {
  wordsPerMinute?: number; // Defaults to 200
}

function calculateReadingTime(
  content: string,
  options?: IReadingTimeOptions
): number {
  const wordsPerMinute = options?.wordsPerMinute || 200; // Average reading speed
  const words = content.split(/\s+/).length; // Split by spaces to count words
  const minutes = Math.ceil(words / wordsPerMinute);

  return minutes;
}

export default calculateReadingTime;
