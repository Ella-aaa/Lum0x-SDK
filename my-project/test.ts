import {Lum0x} from "lum0x-sdk";

Lum0x.init('TEST_KEY'); 

async function test() {
    let result = await Lum0x.farcasterReaction.getCastReaction({
        hash: "0xfe90f9de682273e05b201629ad2338bdcd89b6be",
        types: "likes",
        limit: 1,cursor:"eyJ0aW1lc3RhbXAiOiIyMDIzLTA3LTIwIDAyOjQwOjU0LjAwMDAwMDAifQ%3D%3D"
    })

    console.log(result)
}
    
test();