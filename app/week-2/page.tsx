import StudentInfo from './student-info';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <Link href = "https://www.github.com"><StudentInfo /></Link>
    </main>
    
  );
}