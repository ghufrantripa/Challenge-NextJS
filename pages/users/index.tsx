import Layout from '../../components/Layout'
import { useRouter } from 'next/router';
import styles from '../../styles/Users.module.css'

interface UserProps{
  dataUsers: Array<any>;
}
export default function Users(props: UserProps) {
  const {dataUsers} = props;
  const router = useRouter();

  console.log(dataUsers)
    return (
      <Layout pageTitle='User Page'>
        <h1 className={styles.title}>User List</h1>
        {dataUsers.map((user) => (
          <>
          <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          </div>
          </>
        )) }
        </Layout>
    );
  }

  export async function getStaticProps() {
    const res = await fetch ('https://gorest.co.in/public/v2/users')
    const dataUsers = await res.json();
    return{
      props: {
        dataUsers: dataUsers,
      },
    };
  }



