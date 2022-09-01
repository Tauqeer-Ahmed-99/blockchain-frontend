import DashboardIcon from "../../assets/icons/home.svg";
import ExchangeIcon from "../../assets/icons/chart-1.svg";
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
    item: "Exchange",
    iconPath: ExchangeIcon,
    route: "/exchange",
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
