Bun.serve({
    port: 2828,
    fetch: (request, server) => {
        const url = new URL(request.url);
        if (url.searchParams.get("name")) {
            return new Response(`Hello ${url.searchParams.get("name")}!`);
        } else {
            return new Response("Hello World!");
        }
    },
});
