import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './MenuMoreVert.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function MenuMoreVert() {
  const [ancrageEl, setAncrageEl] = React.useState(null);

  const gererClick = (evt) => {
    setAncrageEl(evt.currentTarget);
  };

  const gererFermer = () => {
    setAncrageEl(null);
  };

  return (
    <div className="MenuMoreVert">
      <Button className="boutonMoreVert" aria-controls="simple-menu" aria-haspopup="true" onClick={gererClick}>
        <MoreVertIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={ancrageEl}
        keepMounted
        open={Boolean(ancrageEl)}
        onClose={gererFermer}
      >
        <MenuItem onClick={gererFermer}>Modifier</MenuItem>
        <MenuItem onClick={gererFermer}>Supprimer</MenuItem>
      </Menu>
    </div>
  );
}