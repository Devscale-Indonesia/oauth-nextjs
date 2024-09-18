import { loginWithGoogle } from "@/actions/auth/sign.google";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-[320px] text-center space-y-6">
        <section>
          <h1>Login</h1>
          <p>Please continue to login</p>
        </section>
        <form action={loginWithGoogle}>
          <button>Sign in with Google</button>
        </form>
      </div>
    </main>
  );
}
