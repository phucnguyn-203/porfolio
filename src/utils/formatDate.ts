export default function formatDate(date: string): string {
  const formattedDate = new Date(date);
  const day = String(formattedDate.getDate()).padStart(2, '0');
  const month = String(formattedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
  const year = formattedDate.getFullYear();

  return `${day}-${month}-${year}`;
}
