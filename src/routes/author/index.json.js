import posts from "../blog/_posts.js";

const contents = JSON.stringify(
  posts.map(post => {
    return {
      title: post.title,
      slug: post.slug,
      author: post.author,
      html: post.html
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
