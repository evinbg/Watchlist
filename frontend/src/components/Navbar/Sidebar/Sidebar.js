import {
  Side,
  SideIcon,
  SideCloseIcon,
  SideItems,
  SideLinkItems
} from "./SidebarElements";

function Sidebar({props, isOpen, toggle}) {

    return (
        <Side isOpen={isOpen} onClick={toggle}>
            <SideIcon onClick={toggle}>
                <SideCloseIcon />
            </SideIcon>
            <SideItems>

                <SideLinkItems>
                    <SidebarItem to='/' text="Home" />
                </SideLinkItems>

                <SideLinkItems>
                    <SidebarItem to='/downloaded' text="Watchlist" />
                </SideLinkItems>

                <SideLinkItems>
                    <SidebarItem to='/about' text="About" />
                </SideLinkItems>

            </SideItems>
        </Side>
    );
}

function SidebarItem(props) {

    return (
    <a href={props.to} rel="noopener noreferrer">
        {props.text}
    </a>
    );
}

export default Sidebar;