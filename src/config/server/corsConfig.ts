export const corsConfig = {
  origin: [
    "http://localhost:3333",
    "http://localhost:2222",
    "https://dl.aitihyatheheritage.in",
    "https://aitihya.slimdl.com",
  ],
  credentials: true,
};

// export const corsConfig = {
//   origin: true,
//   credentials: true,
// };

// export const corsConfig = {
//   origin: [
//     "http://localhost:3333",
//     "http://localhost:2222",
//     "https://dl.aitihyatheheritage.in",
//     "https://aitihya.slimdl.com",
//   ],
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders:
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-HTTP-Method-Override, Set-Cookie, Cookie",
// };
