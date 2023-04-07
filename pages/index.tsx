import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { PostDto } from '../lib/types/PostDto';
import PostList, {
  PostListProps,
  PostPropsWithId,
} from '../components/PostList';
import Error from 'next/error';

type HomeProps = PostListProps & { error: number | null };

export default function Home({ posts, error }: HomeProps) {
  if (error) {
    return <Error statusCode={error} />;
  }

  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <section className={styles.posts}>
          <PostList posts={posts} />
        </section>
      </main>
    </>
  );
}

function mapDataToPosts(data: PostDto[]): PostPropsWithId[] {
  return data.map((postDto) => ({
    id: postDto.id,
    header: postDto._embedded['wp:term'][2][0]?.name ?? '',
    imageUrl: postDto.featured_media,
    title: postDto.title.rendered,
    url: postDto.link,
    author: postDto._embedded.author[0].name,
    authorUrl: postDto._embedded.author[0].link,
    date: postDto.date_gmt,
    footer: 'Article',
  }));
}

export async function getServerSideProps() {
  const url =
    'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';
  const res = await fetch(url);

  if (!res.ok) {
    return { props: { posts: [], error: res.status } };
  }

  const data = await res.json();

  return { props: { posts: mapDataToPosts(data), error: null } };
}
