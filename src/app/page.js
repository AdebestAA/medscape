"use client"
import Image from "next/image";
import Link from "next/link";
import "./home-page.css"

import HomeNav from "@/components/HomeNav/HomeNav";
import { SimulationProgressProvider } from "@/Contexts/SimulationProgressContext";
import { useState } from "react";
import { redirect } from "next/navigation";
export default function Home() {
const [user,setUser] = useState(false)




if (!user) {
  redirect("/simulation")
}
  return (
    
    <main className=" w-screen h-screen">
<HomeNav/>

<Link href={"/register"}>register page</Link>
<br />
<Link href={"/login"}>login page</Link>
<br />
<Link href={"/simulation"}>simulation page</Link>
    </main>

  );
}
