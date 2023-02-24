import {
  Navbar,
  Text,
  UnstyledButton,
  Group,
  ThemeIcon,
  Divider,
  Alert,
} from "@mantine/core";

import Link from "next/link";
import ConnectWallet from "./ConnectWallet";
import { buttonStyles } from "@component/styles/customStyles";
import {
  USER_MENU,
  ADMIN_MENU,
  SUPER_ADMIN_MENU,
} from "@component/constants/menu";
import { useToggle } from "@mantine/hooks";
import { IconAlertCircle } from "@tabler/icons";

const CreateMenu = ({ item }) => (
  <UnstyledButton sx={buttonStyles} component={Link} href={item.href}>
    <Group>
      <ThemeIcon color={item.color} variant="light">
        {item.icon}
      </ThemeIcon>
      <Text fz="sm">{item.label}</Text>
    </Group>
  </UnstyledButton>
);

export default function MyNavbar({ opened }) {
  const [alert, toogleAlert] = useToggle([true, false]);
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 250, lg: 300 }}
    >
      <Navbar.Section>
        {USER_MENU.map((item, index) => (
          <CreateMenu item={item} key={index} />
        ))}
      </Navbar.Section>
      <Divider my="sm" />
      <Navbar.Section>
        {ADMIN_MENU.map((item, index) => (
          <CreateMenu item={item} key={index} />
        ))}
      </Navbar.Section>
      <Divider my="sm" />
      <Navbar.Section grow>
        {SUPER_ADMIN_MENU.map((item, index) => (
          <CreateMenu item={item} key={index} />
        ))}
      </Navbar.Section>
      {alert && (
        <>
          <Divider my="sm" />
          <Navbar.Section>
            <Alert
              color="red"
              title="!Warning"
              icon={<IconAlertCircle size={16} />}
              withCloseButton
              onClose={() => toogleAlert()}
            >
              Please switch to a supported chain. The supported Chain Ids are:
              1337 and 3117
            </Alert>
          </Navbar.Section>
        </>
      )}
      <Divider my="sm" />
      <Navbar.Section>
        <ConnectWallet />
      </Navbar.Section>
    </Navbar>
  );
}
