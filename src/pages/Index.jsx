import { Container, Text, VStack, Box, Flex, Spacer, Button, IconButton } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <IconButton
          aria-label="Home"
          icon={<FaHome />}
          variant="ghost"
          color="white"
          size="lg"
        />
        <Text fontSize="xl" fontWeight="bold" ml={2}>
          MyApp
        </Text>
        <Spacer />
        <Button variant="ghost" color="white" mr={4}>
          Home
        </Button>
        <Button variant="ghost" color="white" mr={4}>
          About
        </Button>
        <Button variant="ghost" color="white">
          Contact
        </Button>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="calc(100vh - 64px)"
        p={4}
      >
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">
            Welcome to MyApp
          </Text>
          <Text fontSize="xl">Your journey starts here.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;