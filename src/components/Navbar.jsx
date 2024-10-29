"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { } from "next/router";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];
  const handleLogin = async () => {
    router.push("/api/auth/signin");
  };
  // const handleLogout = async () => {
  //   router.push("/api/auth/signin");
  // };
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-red-500">
      <h1 className="text-3xl">
        Next <span className="text-cyan-300">Hero</span>
      </h1>
      <ul className="flex justify-between items-center space-x-4">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              className={`${pathname === link.path && "text-cyan-300"}`}
              href={link.path}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex space-x-6">
        {session.status === "loading" ? (
          <p>Loading...</p>
        ) : session.status === "authenticated" ? (
          <div className="flex gap-x-4 items-center">
            <div className="text-center flex items-center gap-2">
              <div>
                {session?.data?.user?.name} <br />
                {session?.data?.user?.type}
              </div>
              <Image
                width={50}
                height={50}
                className="btn-circle mx-auto"
                src={session?.data?.user?.image}
                alt={session?.data?.user?.name}
              />
            </div>
            <div className="flex items-center">
              <Link href={"/api/auth/signup"}>
                <button
                  onClick={handleLogin}
                  className="bg-green-500 text-white px-2 py-1"
                >
                  Sign Up
                </button>
              </Link>
            </div>
            <div>
              <button
                onClick={() => signOut()}
                className="bg-green-500 text-white px-2 py-1"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="flex items-center">
              <Link href={"/api/auth/signup"}>
                <button
                  onClick={handleLogin}
                  className="bg-green-500 text-white px-2 py-1"
                >
                  Sign Up
                </button>
              </Link>
            </div>
            <button
              onClick={handleLogin}
              className="bg-green-500 h-10 text-white px-2 py-1"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
