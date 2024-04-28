const passwordHash = await Bun.password.hash("gvstang", {
    algorithm: "bcrypt",
    cost: 10,
});

const result = await Bun.password.verify("gvstang", passwordHash);
console.info(result);
