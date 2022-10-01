import client from '@/.tina/__generated__/client';
import { PostQuery } from '@/.tina/__generated__/types';
import { Heading, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const PostsUid: NextPage<IPostsUidProps> = ({ post }) => {
  console.log(post);
  return (
    <>
      <Heading>{post?.post?.title}</Heading>
      {/* <Text>{post?.post?.content}</Text> */}
    </>
  );
};

interface IPostsUidProps {
  post: PostQuery;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();
  const postEdges = postsListData?.data?.postConnection?.edges ?? [];

  return {
    paths: postEdges.map((post) => ({
      params: { uid: post?.node?._sys.filename },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostsUidProps> = async ({
  params,
}) => {
  const uid = params?.uid ?? '';
  const options = { relativePath: `${uid}.mdx` };
  const req = await client.queries.post(options);
  return {
    props: {
      post: req?.data,
    },
  };
};

export default PostsUid;
