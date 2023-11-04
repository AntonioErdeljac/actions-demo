import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center h-full underline">
      <Link href="/examples/form">Form Example (using FormData)</Link>
      <Link href="/examples/button">Button Example (using direct props)</Link>
    </div>
  );
};
