import { Lum0x } from "lum0x-sdk";

Lum0x.init("TEST_KEY");

let cursor: string | undefined;
async function getCastsByFid(cursor?: undefined | string) {
  const data = await Lum0x.farcasterCast.getCastsByFid({
    fid: 602,
    parent_url: "https://warpcast.com/~/channel/airstack",
    limit: 150,
    cursor: cursor,
  });
  console.log(data);
  return data.result.next.cursor;
}

//getCastsByFid 연달아 호출하는 함수 (getCastsByFid 호출시 limit의 최대값이 150을 넘겨서 호출하고 싶은 경우)
async function getBulkCastByFid(limit: number) {
  let count = limit / 150;
  for (let i = 0; i < count; i++) {
    const result = await getCastsByFid(cursor);
    cursor = result;
  }
}

getBulkCastByFid(250);
