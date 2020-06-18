import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const [activePageName, setActivePageName] = useState("home");

  const history = useHistory();

  const goToPage = (link) => {
    setActivePageName(link);
    history.push(link);
  };

  return (
    <>
      <Menu pointing secondary>
        <Menu.Item name='home' active={activePageName === "/"} onClick={() => goToPage("/")}>
          Home
        </Menu.Item>

        <Menu.Item name='feed' active={activePageName === "feed"} onClick={() => goToPage("feed")}>
          Feed
        </Menu.Item>

        <Menu.Item
          name='gallery'
          active={activePageName === "gallery"}
          onClick={() => goToPage("gallery")}
        >
          Gallery
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Nav;
