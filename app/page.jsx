"use client";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

// export const metadata = {
//   title: "Home Page",
// };

export default function Home() {
  const { data: session } = useSession();



  if (session) {
    console.log(JSON.stringify(session.user))
    return (
      <>
        <button onClick={() => signOut()}>Sign Out</button>
        <div> Signed in as {session.user.email} </div>
      </>
    );
  } else {
    return  <button onClick={() => signIn()}>Sign in</button>
  }

}
