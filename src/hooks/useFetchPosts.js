import { useEffect, useState } from "react";
import axios from "axios";

// recursion function to fetch 500 posts
export async function fetchPaginatedPosts(
  subreddit,
  previousPosts = [],
  after = null
) {
  // TODO: Define endpoint
  let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

  // TODO: Add 'after' param, if exists
  if (after) {
    url += `&after=${after}`;
  }

  // TODO: Get Data and append to previousPosts
  const { data } = await axios.get(url);
  const allPosts = previousPosts.concat(data.children);

  // TODO: Find min and max limit of posts
  const lessThan100Posts = data && data.dist < 100;
  const moreThan500Posts = allPosts.length >= 500;

  // TODO: if too less or too high return posts (stop condition for recursion)
  if (lessThan100Posts || moreThan500Posts) return allPosts;

  return fetchPaginatedPosts(subreddit, allPosts, data.after);
}

// custom useFetchPosts hook
const useFetchPosts = (subreddit) => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    setStatus("pending");
    fetchPaginatedPosts(subreddit)
      .then((result) => {
        setPosts(result);
        setStatus("resolved");
      })
      .catch(() => {
        setStatus("rejected");
      });
  }, [subreddit]);

  return {
    isLoading: status === "pending",
    hasError: status === "rejected",
    posts,
  };
};
export default useFetchPosts;
