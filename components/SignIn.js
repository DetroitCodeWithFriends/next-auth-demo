import { useSession, signIn, signOut } from 'next-auth/react';

export default function SignIn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email}
        <br />
        <button onClick={() => signOut()}>signOut</button>
      </>
    );
  }
  return (
    <>
      not SignIn
      <br />
      <button onClick={() => signIn()}>signIn</button>
    </>
  );
}
