import Link from "next/link";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link href={"#services"}>Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
