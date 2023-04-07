import Post, { PostProps } from './Post';
import styles from './PostList.module.scss';

export type PostPropsWithId = { id: number } & PostProps;

export type PostListProps = {
  posts: PostPropsWithId[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => {
        return (
          <li key={post.id} className={styles.item}>
            <Post
              header={post.header}
              imageUrl={post.imageUrl}
              title={post.title}
              url={post.url}
              author={post.author}
              authorUrl={post.authorUrl}
              date={new Date(post.date)}
              footer={post.footer}
            />
          </li>
        );
      })}
    </ul>
  );
}
