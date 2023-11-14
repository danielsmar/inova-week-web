import { Box, Image, Text } from '@chakra-ui/react';
import SideNavBar from '@/components/SideNavBar';

export default function Dashboard() {
  return (
    <Box display="flex">
      <SideNavBar />
      <Box
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <Box
          w="55%"
          h="40px"
          bg="brand.800"
          borderRadius="40"
          borderTopRadius="0"
        />
        <Box display="flex" w="55%" m={30}>
          <Text fontSize={14} fontWeight="bold">
            Você está em:
          </Text>
          <Text ml={1} fontSize={14}>
            Dashboard
          </Text>
        </Box>

        <Image
          src="https://uvv.br/wp-content/uploads/20230830-inovaweek-2023-noticia.png"
          w="55%"
        />
        <Box w="55%">
          <Text fontSize={40} fontWeight="bold">
            Conheça a programação do InovaWeek 2023
          </Text>
          <Text fontSize={16} mt={1}>
            O maior evento universitário de inovação e empreendedorismo do ES
            está chegando! O InovaWeek 2023, promovido pela Universidade Vila
            Velha, acontece de 12 a 14 de setembro, no Campus Boa Vista da
            instituição.
          </Text>
          <Text fontSize={16} mt={1}>
            A edição deste ano tem “Smart Communities: Novos caminhos para
            evoluir” como tema principal. O mote é o fio condutor de todas as
            atrações e atividades que movimentarão a UVV ao longo dos três dias
            de evento.{' '}
          </Text>
          <Text fontSize={16} mt={1}>
            Dentre os destaques da programação, estão as palestras com grandes
            profissionais do mercado, exposição de trabalhos acadêmicos
            inovadores, gincana entre estudantes de Ensino Médio e a cerimônia
            Honoris Causa, que homenageará o Secretário de Educação do Espírito
            Santo, Vitor De Angelo, e o Egresso de Ciência da Computação UVV,
            criador do Jade Autism, Ronaldo Cohin.
          </Text>
          <Text fontSize={16} mt={1}>
            O InovaWeek é gratuito e aberto para toda a comunidade. Confira a
            programação clicando aqui.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
