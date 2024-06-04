import { Container, Box, Heading, VStack, Button, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Login = () => {
  const { session, logout } = useSupabaseAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxW="container.sm" p={4}>
      <Box textAlign="center" mb={6}>
        <Heading>Login</Heading>
      </Box>
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
      {session ? (
        <VStack spacing={4}>
          <Button onClick={handleLogout} colorScheme="blue">
            Logout
          </Button>
        </VStack>
      ) : (
        <SupabaseAuthUI />
      )}
    </Container>
  );
};

export default Login;