import { GridView, Logout, ShareOutlined , FavoriteBorder, PermIdentityOutlined } from '@mui/icons-material'

  
 
  export const SidebarData= [
    {
      icon: GridView,
      heading: "Dashboard",
      path: "/"
    },
    {
      icon: ShareOutlined,
      heading: "Distributions",
      path: "/stock"
    },
    {
      icon: FavoriteBorder,
      heading: "Saved Items",
      path: "/wallet"
    },
    {
      icon: FavoriteBorder,
      heading: 'Products',
      path: "/account"
    },
    {
        icon: PermIdentityOutlined,
        heading: 'Edit Profile',
        path: "/account"
      },
    {
      icon: Logout,
      heading: 'Analytics',
      path: "/bola"
    },
  ];
  
  
  
  