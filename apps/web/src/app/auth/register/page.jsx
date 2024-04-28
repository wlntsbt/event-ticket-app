import Link from 'next/link';
export default function RegistrationPage() {
  return (
    <div>
      <Link href={'/auth/register/promoter'}>
        <div className="bg-purple-300">Register as Promoter</div>
      </Link>
      <Link href={'/auth/register/user'}>
        <div className="bg-green-300">Register as Attendee</div>
      </Link>
    </div>
  );
}
