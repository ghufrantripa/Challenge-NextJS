import Layout from '../../components/Layout'
import styles from '../../styles/Users.module.css'

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface UserDetailProps{
  user: User;
}
export default function UseDetail(props: UserDetailProps) {
  const {user} = props;
    return (
      <Layout pageTitle='User Detail'>
        <div className={styles.carddetails}>
          <h3>User Detail</h3>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.gender}</p>
        <p>{user.status}</p>
        </div>
        </Layout>
    );
  }

  export async function getStaticPaths() {
    const res = await fetch ('https://gorest.co.in/public/v2/users');
    const dataUsers = await res.json();

    const paths = dataUsers.map((user: User) => ({
        params: {
          id: `${user.id}`,
        },
      }));
    return {
      paths,
      fallback: false,
    };
  }

  interface GetStaticProps{
    params: {
      id: string;
    }
  }
  export async function getStaticProps(context: GetStaticProps) {
    const { id } = context.params;
    const res = await fetch (`https://gorest.co.in/public/v2/users/${id}`)
    const user = await res.json();

    return {
      props:{
        user,
      },
    };
  }