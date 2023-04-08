import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

console.log(
  createBrowserSupabaseClient({
    supabaseUrl: "https://test.com",
    supabaseKey: "test",
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
