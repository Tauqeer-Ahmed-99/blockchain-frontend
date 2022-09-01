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
    isActive: true,
    route: "/dashboard",
  },
  {
    item: "Exchange",
    iconPath: ExchangeIcon,
    isActive: false,
    route: "/exchange",
  },
  {
    item: "Wallet",
    iconPath: WalletIcon,
    isActive: false,
    route: "/wallet",
  },
  {
    item: "Chart",
    iconPath: ChartIcon,
    isActive: false,
    route: "/charts",
  },
  {
    item: "Profile",
    iconPath: ProfileIcon,
    isActive: false,
    route: "/profile",
  },
  {
    item: "Settings",
    iconPath: SettingsIcon,
    isActive: false,
    route: "/settings",
  },
];
