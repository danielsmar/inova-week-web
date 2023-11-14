import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export function Logo() {
  return (
    <Box bg="brand.800" display="flex" justifyContent="center">
      <Image src="/logo_inova.svg" width={166} height={110} alt="logo" />
    </Box>
  );
}
