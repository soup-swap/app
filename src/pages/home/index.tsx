import styles from "./home.module.css";
import Head from "next/head";

// const { data, error } = await supabase.auth.signInWithOtp({
// 	email: 'example@email.com',
// 	options: {
// 	  emailRedirectTo: 'https://example.com/welcome'
// 	}
//   })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Soup Swap</title>
        <meta name="description" content="Trade recipes with your friends" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          fontFamily: "sans-serif",
          backgroundColor: "#86BBD8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div style={{ fontSize: 100 }}>🍜</div>
        <h1 style={{ fontWeight: 200, color: "#2F4858" }}>Swapping Soon...</h1>
      </main>
    </>
  );
}
