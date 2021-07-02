import React from 'react'
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

export default function MobileMenu(props) {

  const {mobileMenuId, isMobileMenuOpen, handleMobileMenuClose, mobileMoreAnchorEl} = props
  
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <AddIcon />
        </IconButton>
        <p>Add Personnel</p>
      </MenuItem>
    </Menu>
  )
}
