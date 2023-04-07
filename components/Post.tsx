import Image from 'next/image';
import styles from './Post.module.scss';
import { ReactNode } from 'react';

export type PostProps = {
  header: string;
  imageUrl: string;
  title: string;
  url: string;
  author: string;
  authorUrl: string;
  date: Date;
  footer: string;
};

export default function Post({
  header,
  imageUrl,
  title,
  url,
  author,
  authorUrl,
  date,
  footer,
}: PostProps) {
  const localDate = date.toLocaleString('en-UK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className={styles.post}>
      <div className={styles.header}>{header}</div>
      <div
        className={['p-card', 'u-no-margin--bottom', styles.content].join(' ')}
      >
        <div className="p-card__content">
          <Image
            className="p-card__image"
            alt=""
            src={imageUrl}
            width="640"
            height="360"
          />
          <h4>
            <a href={url} target="_blank">
              {title}
            </a>
          </h4>
          <p>
            <em>
              by{' '}
              <a href={authorUrl} target="_blank">
                {author}
              </a>{' '}
              on {localDate}
            </em>
          </p>
        </div>
      </div>
      <p className={['u-no-margin--bottom', styles.footer].join(' ')}>
        {footer}
      </p>
    </article>
  );
}
