
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
    <h1>medscape</h1>
    <Link href={"/register"} className="text-[blue]">register</Link>
    <br />
    <Link href={"/login"}  className="text-[blue]">login</Link>

    </main>
  );
}
