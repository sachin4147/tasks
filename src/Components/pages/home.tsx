import React from "react";
import {
  Box,
  IconButton,
  useColorModeValue,
  Flex,
  Text,
  HStack,
  ButtonGroup,
  Button,
  useDisclosure,
  Drawer,
  DrawerContent,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Input,
  FlexProps,
Heading
} from "@chakra-ui/react";
import {
  FiMenu,
  FiBell,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  
} from "react-icons/fi";
import { Search2Icon } from "@chakra-ui/icons";
import {SidebarContent} from "./Searchbar"; 
import Biilingpage from "./biilingpage";


interface MobileProps extends FlexProps {
    onOpen: () => void
  }


  const SearchBar = () => {
    return (
      <InputGroup
        borderRadius={{ base: 10, md: 15 }}
        size={{ base: "sm", md: "sm" }}
        w={{ base: "100%", md: 650 }}
        mx="auto"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          borderRightRadius={{ base: 10, md: 0 }}
          borderTopRadius={{ base: 0, md: 15 }}
          type="text"
          placeholder="Search patients"
          border={{ base: "1px solid #949494", md: "none" }}
        />
        <InputRightAddon p={0} border="none" />
      </InputGroup>
    );
  };
  
  const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Logo
        </Text>
  
        <HStack spacing={{ base: "0", md: "1" }} >
          <SearchBar />
          <ButtonGroup variant="outline" spacing={{ base: "0", md: "1" }} fontSize={{base:"sm",md:"50px"}}>
            <Button bg="blue"w={{base:"100px",md:"200px"}} colorScheme="white" color="white">Make an Appointment</Button>
            <Button bg="blue" color="white">Add patients</Button>
          </ButtonGroup>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
        </HStack>
      </Flex>
    );
  };
  
  const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Flex
        direction="column"
        minH="100vh"
        bg={useColorModeValue("gray.100", "gray.900")}
      >
        <Flex>
          <SidebarContent
            onClose={onClose}
            display={{ base: "none", md: "block" }}
          />
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
        </Flex>
        <MobileNav onOpen={onOpen} />
        <Box  minW="700px" marginLeft="250px">
        <Flex
             direction="row"
             justifyContent="space-between"
             minW="70%">
            <Heading>Billing Overview</Heading>
            <Input
              placeholder="Select Date and Time"
               size="sm"
               type="datetime-local"
               w="sm"
/>
        </Flex>
        </Box>
        <Box marginRight={10} marginLeft="-100px">
        <Biilingpage/>
        </Box>
      </Flex>
    );
  };
  
  export default Home;