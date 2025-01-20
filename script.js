const http = require("http");

let users = [];

const sortUsers = () =>
  [...users].sort((a, b) => a.name.localeCompare(b.name));

const server = http.createServer((req, res) => {
  const { url, method } = req;
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    res.setHeader("Content-Type", "application/json");

    // Get All Users
    if (method === "GET" && url === "/users") {
      res.writeHead(200);
      res.end(JSON.stringify(users, null, 2));
    }

    // Add Users
    else if (method === "POST" && url === "/users") {
      const { UserName, email, age } = JSON.parse(body);
      const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        UserName,
        email,
        age
      }
      users.push(newUser);
      res.writeHead(201);
      res.end(
        JSON.stringify({ user: newUser, message: "User added successfully" })
      );
    }

    // Update User
    else if (method === "PUT" && url.startsWith("/users/")) {
      const id = parseInt(url.split("/")[2]);
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        const updatedUser = JSON.parse(body);
        users[userIndex] = { ...users[userIndex], ...updatedUser };
        res.writeHead(200);
        res.end(
          JSON.stringify({
            user: users[userIndex],
            message: "User updated successfully"
          })
        );
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "User not found" }));
      }
    }

    // Delete user
    else if (method === "DELETE" && url.startsWith("/users/")) {
      const id = parseInt(url.split("/")[2]);
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.writeHead(200);
        res.end(
          JSON.stringify({
            user: deletedUser,
            message: "User deleted successfully!"
          })
        );
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "User not found" }));
      }
    }

    // Get All Users Sorted By name
    else if (method === "GET" && url === "/users/sorted") {
      const sortedUsers = sortUsers();
      res.writeHead(200);
      res.end(JSON.stringify(sortedUsers));
    }

    // Search user by ID
    else if (method === "GET" && url.startsWith("/users/")) {
      const id = parseInt(url.split("/")[2]);
      const user = users.find((user) => user.id === id);
      if (user) {
        res.writeHead(200);
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "User not found!" }));
      }
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: "Invalid Endpoint!" }));
    }
  });
});

server.listen(2247, () => {
  console.log("server running on http://localhost:2247");
});
