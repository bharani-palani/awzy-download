import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconBellQuestion,
  IconStepInto,
  IconUserCode,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Links",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Why Awzy!",
    icon: IconBellQuestion,
    href: "/whyAwzy",
  },
  {
    id: uniqueId(),
    title: "Steps to follow",
    icon: IconStepInto,
    href: "/steps-to-follow",
  },
  {
    navlabel: true,
    subheader: "Developer",
  },
  {
    id: uniqueId(),
    title: "Author",
    icon: IconUserCode,
    href: "/author",
  },
];

export default Menuitems;
