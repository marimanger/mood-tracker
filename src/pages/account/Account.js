import "./account.scss";
import "../../components/chart/chart.scss";
import Chart from "../../components/chart/Chart";

function Account() {
  return (
    <>
      <div className="account__wrap-head">
        <h1 className="account__header">My Account</h1>
        <p className="account__descr">Manage setings related to your account</p>
      </div>
      <div className="account__container">
        <section className="profile__settings">
          <article className="profile__card">
            <h2 className="profile__header">Profile</h2>
            <p className="profile__text">Manage profile settings</p>
            <div className="text__wrapper">
              <p className="title__name">First Name </p>
              <p className="name"> Bridgit </p>
            </div>
            <div className="text__wrapper">
              <p className="title__name">Last Name </p>
              <p className="name">Jones </p>
            </div>
            <div className="text__wrapper">
              <p className="title__name">Email </p>
              <p className="name">example@gmail.com</p>
            </div>
            <div className="text__wrapper">
              <p className="title__name">Password</p>
              <p className="name">....... </p>
            </div>
          </article>
        </section>
        <section className="statistics__section">
          <h2>My Statistic</h2>
          <Chart />
        </section>
      </div>
    </>
  );
}

export default Account;
