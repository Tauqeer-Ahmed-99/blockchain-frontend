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
    onClick: () => {},
  },
  {
    item: "Exchange",
    iconPath: ExchangeIcon,
    isActive: false,
    onClick: () => {},
  },
  {
    item: "Wallet",
    iconPath: WalletIcon,
    isActive: false,
    onClick: () => {},
  },
  {
    item: "Chart",
    iconPath: ChartIcon,
    isActive: false,
    onClick: () => {},
  },
  {
    item: "Profile",
    iconPath: ProfileIcon,
    isActive: false,
    onClick: () => {},
  },
  {
    item: "Settings",
    iconPath: SettingsIcon,
    isActive: false,
    onClick: () => {},
  },
];
