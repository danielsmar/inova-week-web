import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { useMemo } from 'react';

interface LogoProps {
  width?: number;
  backgroundColor?: string;
}

export function Logo({
  width = 166,
  backgroundColor = 'brand.800',
}: LogoProps) {
  const height = useMemo(() => width * 0.6623, [width]);

  return (
    <Box bg={backgroundColor} display="flex" justifyContent="center">
      <Image src="/logo_inova.svg" width={width} height={height} alt="logo" />
    </Box>
  );
}
