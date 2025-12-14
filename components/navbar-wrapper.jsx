import { auth, signIn, signOut } from "@/auth"
import Navbar from "./Navbar"

export default async function NavbarWrapper() {
  const session = await auth()

  const handleSignIn = async () => {
    "use server"
    await signIn("github")
  }

  const handleSignOut = async () => {
    "use server"
    await signOut({ redirectTo: "/" })
  }

  return <Navbar session={session} signIn={handleSignIn} signOut={handleSignOut} />
}
