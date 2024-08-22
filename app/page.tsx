import { fetchMetadata } from "frames.js/next";
import {Lum0x} from "lum0x-sdk";
import { Button } from "frames.js/next";

Lum0x.init('TEST_KEY');
export async function generateMetadata() {
  return {
    title: "My Page",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        "/frames",
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000"
        // "http://localhost:3000"
      )
    ),
  };
}
   


export default function Page() {
  return <>
  <Button action='link' target={"https://warpcast.com/~/add-cast-action"}> test api </Button>
  <button> test </button>
  <div>
    test result
  </div>
  </>;
}