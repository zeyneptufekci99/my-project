"use client";
import { Button, buttonVariants } from "my-app";
export default function Home() {
  return (
    <div>
      <Button variant="default" onClick={() => console.log("clicked")}>
        Button
      </Button>
    </div>
  );
}
