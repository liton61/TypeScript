{
    // nullish coalescing operator (Work on null & undefined)
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 })
    console.log({ result2 })
}