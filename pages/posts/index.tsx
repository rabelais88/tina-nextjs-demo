import client from '@/.tina/__generated__/client';
import { List, ListItem, Heading } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

const Posts: NextPage<IPostsPageProps> = ({ posts }) => {
  return (
    <>
      <Heading>posts</Heading>
      <List>
        {posts.map((post, i) => (
          <ListItem key={i}>
            {post.title}-{post.url}
            <Link href={`/posts/${post.url}`}>link</Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

// type TPostEdges = NonNullable<PostConnection['edges']>;
interface IPostsPageProps {
  posts: { title: string; url: string }[];
}

export const getStaticProps: GetStaticProps<IPostsPageProps> = async () => {
  const postsListData = await client.queries.postConnection();
  const postEdges = postsListData.data.postConnection.edges ?? [];
  const posts = postEdges.map((post) => ({
    title: post?.node?.title ?? '',
    url: post?.node?._sys?.filename ?? '',
  }));

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
