import { useEffect, useState } from 'react';
import Link from 'next/link';
import NavBar from '../../components/navBar';
import styles from '../../styles/pages/dashboard.module.scss';
import Footer from '../../components/footer';
import ServiceModal from '../../components/serviceModal';

function UserHome() {
  const [showModal, setShowModal] = useState(false);
  const [professional, setProfessional] = useState({});
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    setProfessional(profile);
  }, []);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.description}>
            Hola {professional.name} {professional.lastName}
          </p>
          <p className={styles.description}>
            <small>
              En este espacio, podrá verificar las citas que tiene asignadas,
              modificar su disponibilidad en el calendario y crear servicios.
            </small>
          </p>
          <div className={styles.grid}>
            <button onClick={handleOpenModal} className={styles.card}>
              <h2>Crear Servicios &rarr;</h2>
              <p>Agregue servicios para sus usuarios</p>
            </button>
            <button className={styles.card}>
              <h2>Disponibilidad &rarr;</h2>
              <p>Modifique su disponibilidad horaria</p>
            </button>
            <Link
              href={`/agenda/${professional.name}-${professional.lastName}`}
            >
              <a className={styles.card}>
                <h2>Verificar Citas &rarr;</h2>
                <p>Verifique las citas que tiene asignadas</p>
              </a>
            </Link>
            <Link href={`/tarifas`}>
              <a className={styles.card}>
                <h2>Servicios &rarr;</h2>
                <p>Vea y edite los service que ahora mismo ofrece</p>
              </a>
            </Link>
          </div>
          <ServiceModal setShowModal={setShowModal} show={showModal} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default UserHome;
