"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 50);

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <main className="flex flex-col items-center bg-background justify-center min-h-screen text-center px-4 w-screen">
      <h1 className="text-secondary_heading hidden text-secondary-foreground font-bold mb-4">
        404 - Page Not Found
      </h1>
      <p className="mb-8 hidden text-our_text_heading text-foreground">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <p className="mb-8 hidden text-subtitle_heading text-foreground">
        You will be redirected to the home page in 5 seconds...
      </p>
      <Link
        href="/"
        className="px-4 py-2 hidden bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Go to Home Page Now
      </Link>
    </main>
  );
}
