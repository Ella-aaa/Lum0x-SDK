/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

import {Lum0x} from "lum0x-sdk";

Lum0x.init('TEST_KEY');

const handleRequest = frames(async (ctx) => {
return {
    image: (
      <span>
        {ctx.pressedButton
          ? `I clicked ${ctx.searchParams.value}`
          : "Nothing"}
      </span>
    ),
    buttons: [
      <Button action="post" target={{ query: { value: "Yes" } }}>
        Say Yes
      </Button>,
      <Button action="link" target={'ww'}>
        Say No
      </Button>,
    ],
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;
