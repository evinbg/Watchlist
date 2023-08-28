import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    Foot,
    FootContainer,
    FootLogo,
    FootContact,
    FootInfo,
    FootLink,
  } from "./FooterElements";

function Footer() {
  return (
    <Foot>
        <FootContainer>
            <FootLogo>
                WATCHLIST
            </FootLogo>
            <FootInfo>
                <FootContact>Contact: </FootContact>
                <FootLink href="mailto:evinpbg@gmail.com"><MdEmail />&nbsp;&nbsp;evinpbg@gmail.com</FootLink>
                <FootLink href="https://www.linkedin.com/in/evinbg/" target="_blank" rel="noopener noreferrer"><FaLinkedin />&nbsp;&nbsp;Evin Bour-Gilson</FootLink>
                <FootLink href="https://github.com/evinbg/" target="_blank" rel="noopener noreferrer"><FaGithub />&nbsp;&nbsp;evinbg</FootLink>
            </FootInfo>
        </FootContainer>
    </Foot>
  );
}

export default Footer;