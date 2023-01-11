import Link from "next/link";
import { signOut } from 'next-auth/react';

const AdminIndexPage = () => {


  return (
    <>
      Admin, <Link href="#" onClick={() => signOut()}>Logga ut</Link>
    </>
  );
}

export default AdminIndexPage;
