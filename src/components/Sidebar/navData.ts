import DashboardIcon from "../../assets/icons/home.svg";
import ChainIcon from "../../assets/icons/chain.svg";
import NetworkIcon from "../../assets/icons/network.svg";
import WalletIcon from "../../assets/icons/wallet.svg";
import ChartIcon from "../../assets/icons/chart.svg";
import ProfileIcon from "../../assets/icons/user-profile.svg";
import SettingsIcon from "../../assets/icons/settings.svg";

export const navigations = [
  {
    item: "Dashboard",
    iconPath: DashboardIcon,
    route: "/dashboard",
  },
  {
    item: "Blockchain",
    iconPath: ChainIcon,
    route: "/blockchain",
  },
  {
    item: "Peer Nodes",
    iconPath: NetworkIcon,
    route: "/peer-nodes",
  },
  {
    item: "Wallet",
    iconPath: WalletIcon,
    route: "/wallet",
  },
  {
    item: "Chart",
    iconPath: ChartIcon,
    route: "/charts",
  },
  {
    item: "Profile",
    iconPath: ProfileIcon,
    route: "/profile",
  },
  {
    item: "Settings",
    iconPath: SettingsIcon,
    route: "/settings",
  },
];
