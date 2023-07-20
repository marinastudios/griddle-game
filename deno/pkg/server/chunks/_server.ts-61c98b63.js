async function GET() {
  rtAPI.onev(() => {
    console.log("A");
  });
  return new Response("OK");
}

export { GET };
//# sourceMappingURL=_server.ts-61c98b63.js.map
