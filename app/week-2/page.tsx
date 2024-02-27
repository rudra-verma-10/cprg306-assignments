import StudentInfo from './student-info';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1 className='text-2xl font-semibold'>Shopping List</h1>
      <Link href = "https://github.com/rudra-verma-10/cprg306-assignments.git">
        <StudentInfo />
      </Link>
    </main>
    
  );
}