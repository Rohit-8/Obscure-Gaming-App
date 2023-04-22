import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"; 
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const drawerWidth = 240;

const navItems = [{
    name: "Fun Zone",
    hr: "/"
  },
  {
    name: "About Us",
    hr: "/about"
  }
];

function Header() {
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <SportsEsportsIcon sx={{ fontSize: 25 }} className="gameIc"/>
        Obscure Gaming
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => history(item.hr)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const { window } = 2
  const container = window !== undefined ? () => window().document.body : undefined;

  const history = useNavigate();


  return (
    
    <header>
      <h1>
      <Box sx={{ display: 'flex' }} >
      <AppBar component="nav" sx={{ bgcolor: "#4d4c49"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <SportsEsportsIcon sx={{ fontSize: 25 }} className="gameIc"/>
            Obscure Gaming
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{ color: '#fff' }} onClick={() => history(item.hr)}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      </Box>
    </h1>
    </header>
  );
};

export default Header;