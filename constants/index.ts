import { LuLayoutDashboard } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TbLogs } from "react-icons/tb";

export const SidebarItems = [
  { icon: LuLayoutDashboard, title: "Dashboard", path: "/dashboard" },
  { icon: IoPeopleOutline, title: "Tenants", path: "/tenants" },
  {
    icon: HiOutlineDocumentReport,
    title: "Reports",
    subLinks: [
      { title: "Monthly Billing", path: "/reports/monthly-bill" },
      { title: "Payments", path: "/reports/payments" },
    ],
  },
  { icon: TbLogs, title: "Activity Logs", path: "/activity-logs" },
];

import { GoPeople } from "react-icons/go";
import { MdMoneyOff, MdOutlineReportOff } from "react-icons/md";

export const SummaryBox = [
  {
    icon1: GoPeople,
    title: "Total Tenants",
    percentage: 0,
    count: 97,
  },
  {
    icon1: MdOutlineReportOff,
    title: "Unpaid Tenants",
    percentage: -2.02,
    count: 7,
  },
  {
    icon1: MdMoneyOff,
    title: "Unpaid Bills",
    percentage: 13.1,
    count: 14920,
  },
];
