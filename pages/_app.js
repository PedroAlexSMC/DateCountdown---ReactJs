import "../styles/globals.css";
import "../styles/timerModule.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bgImage">
      <div className="timeContainer">
        <h1>Time Counter</h1>
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
