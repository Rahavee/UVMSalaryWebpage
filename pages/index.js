import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Goodbye World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
