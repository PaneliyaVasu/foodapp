import style from "./innercontainer.module.css";
export default function InnerContainer({ children }) {
  return <div className={style.icontainer}>{children}</div>;
}
