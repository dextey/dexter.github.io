console.log("fetching blogs from Hashnode");

const END_POINT = "https://gql.hashnode.com";

const headers = {
  "content-type": "application/json",
};
const requestBody = {
  query: `query Publication {
      publication(host: "dextey.hashnode.dev") {
        title,
        metaTags
        posts(first:20) {
          edges {
            node {
              id
              title
              slug
              publishedAt
              readTimeInMinutes
              content {html}
            }
          }
        }
      }
    }`,
};
// content {html}
const options = {
  method: "POST",
  headers,
  body: JSON.stringify(requestBody),
};

const fs = require("fs").promises;

export const data_fetch = async () => {
  const response = await (await fetch(END_POINT, options)).json();

  await fs.writeFile("src/data/blogs.json", JSON.stringify(response, null, 2));
};

data_fetch();
