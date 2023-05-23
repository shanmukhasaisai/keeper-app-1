import React from "react";
const date = new Date();
const currentYear = date.getFullYear();
function Footer() {
	return <footer>Copy right © {currentYear}</footer>;
}
export default Footer;
