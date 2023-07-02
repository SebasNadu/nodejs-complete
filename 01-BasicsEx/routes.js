const USERS = ["joe", "bob", "mary"];

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Welcome</title></head>");
    res.write("<body><h1>Welcome to my Node.js server!</h1>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
      USERS.push(username);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/users");
    res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body><h1>Users</h1>");
    res.write("<ul>");
    USERS.forEach((user) => {
      res.write(`<li>${user}</li>`);
    });
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
};

module.exports = requestHandler;
