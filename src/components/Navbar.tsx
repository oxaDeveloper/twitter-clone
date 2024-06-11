import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between bg-blue-500 p-4 text-white">
      <div className="text-xl font-bold">
        <p>Twitter Clone</p>
      </div>
      <div>
        {!session ? (
          <button onClick={() => signIn("google")}>
            <p>Sign In with Google</p>
          </button>
        ) : (
          <div className="flex items-center">
            <div className="h-8 w-8">
              <Image
                src={session.user.image!}
                alt="Profile"
                className="rounded-full"
                width={1080}
                height={1080}
              />
            </div>

            <span className="ml-2">{session.user.name}</span>
            <button onClick={() => signOut()} className="ml-4">
              <p>Sign Out</p>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
