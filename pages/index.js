import Layout from '../components/Layout';
import CustomLink from '../components/utilities/CustomLink';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <h1>
          Nextjs clean Starter by{' '}
          <CustomLink href="https://ayushsaini.com">Ayush Saini</CustomLink>
        </h1>
        <p>
          Get a <strong>headstart</strong> in developing a Nextjs app
        </p>
        <h2>
          Read{' '}
          <CustomLink href="https://github.com/AyushSaini00/next-clean-starter#readme">
            documentation
          </CustomLink>
        </h2>
      </div>
    </Layout>
  );
}
