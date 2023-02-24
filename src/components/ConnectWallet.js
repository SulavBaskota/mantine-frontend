import Jazzicon from "react-jazzicon";
import { Button, Text, ThemeIcon, UnstyledButton, Group } from "@mantine/core";
import { IconWallet } from "@tabler/icons";
import { buttonStyles } from "@component/styles/customStyles";

export default function ConnectWallet() {
  const connected = false;
  const address = "0x1111111111111111111111111111111111111111";
  return (
    <>
      {connected ? (
        <Button leftIcon={<IconWallet size={16} />} fullWidth size="xl">
          Connect Wallet
        </Button>
      ) : (
        <UnstyledButton sx={buttonStyles}>
          <Group>
            <ThemeIcon variant="light" radius="xl" size="xl">
              <Jazzicon
                diameter={35}
                seed={Math.round(Math.random() * 10000000)}
              />
            </ThemeIcon>
            <Text fw={700} truncate>
              {address.slice(0, 6)}....
              {address.slice(address.length - 4)}
            </Text>
          </Group>
        </UnstyledButton>
      )}
    </>
  );
}
