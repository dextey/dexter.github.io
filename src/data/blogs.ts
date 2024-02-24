import data from "./blogs.json";

export const getBlogs = () => {
  return data.data.publication.posts.edges;
};

export const getBlogContent = (id: string) => {
  const blogs = data.data.publication.posts.edges;

  return blogs.find((blog) => blog.node.id === id)?.node;
};
