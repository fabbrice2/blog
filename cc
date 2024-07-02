
// // Route pour créer un nouvel article
// app.post("/posts", (req, res) => {
//   const { title, description, image_url, user_id } = req.body;
//   const query =
//     "INSERT INTO posts (title, description, image_url, user_id) VALUES (?, ?, ?, ?)";
//   db.query(query, [title, description, image_path, user_id], (err, results) => {
//     if (err) throw err;
//     res
//       .status(201)
//       .json({ id: results.insertId, title, description, image_url, user_id });
//   });
// });

// // Route pour récupérer un article par ID
// app.get("/posts/:id", (req, res) => {
//   const query = "SELECT * FROM posts WHERE id = ?";
//   db.query(query, [req.params.id], (err, results) => {
//     if (err) throw err;
//     res.json(results[0]);
//   });
// });

// // Route pour récupérer tous les utilisateurs
// app.get("/users", (req, res) => {
//   const query = "SELECT * FROM users";
//   db.query(query, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// // Route pour créer un nouvel utilisateur
// app.post("/users", (req, res) => {
//   const { username, password } = req.body;
//   const query = "INSERT INTO users (username, password) VALUES (?, ?)";
//   db.query(query, [username, password], (err, results) => {
//     if (err) throw err;
//     res.status(201).json({ id: results.insertId, username });
//   });
// });

// // Route pour récupérer un utilisateur par ID
// app.get("/users/:id", (req, res) => {
//   const query = "SELECT * FROM users WHERE id = ?";
//   db.query(query, [req.params.id], (err, results) => {
//     if (err) throw err;
//     res.json(results[0]);
//   });
// });



      {/* <ul>
        <li>
          <div>
            <img src="" alt="" />
            <div>
              <p>Sunday , 1 Jan 2023</p>
              <h1>UX review presentations</h1>
              <div>
                <p>
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </p>
                <ArrowUpRightIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <span>Design</span>
                <span>Research</span>
                <span>Presentation</span>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </li>
        <li>
          <div></div>
        </li>
      </ul> */}