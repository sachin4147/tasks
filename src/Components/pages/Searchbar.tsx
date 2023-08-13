// import React from "react";
// import {

//   Input,
//   InputGroup,
//   InputLeftElement,
//   InputRightAddon
// } from "@chakra-ui/react";
// import  {Search2Icon}  from "@chakra-ui/icons";


// type Search2Icon=any

//  const SearchBar = () => {
//   return (
//     <>
//       <InputGroup
//         borderRadius={{ base: 10, md: 15 }}
//         size={{ base: "sm", md: "sm" }}
//         w={{ base: "100%", md: 650 }}
//         mx="auto" // Center the input group horizontally
//       >
//         <InputLeftElement
//           pointerEvents="none"
//           children={<Search2Icon color="gray.600" />}
//         />
//         <Input
//           borderRightRadius={{ base: 15, md: 0 }} // Adjust the border radius
//           borderTopRadius={{ base: 0, md: 15 }} // Adjust the border radius
//           type="text"
//           placeholder="Search patients"
//           border={{ base: "1px solid #949494", md: "none" }} // Adjust the border
//         />
//         <InputRightAddon p={0} border="none" />
//       </InputGroup>
//     </>
//   );
// };
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  
  Icon,
  useColorModeValue,
  Text,
  
  BoxProps,
  FlexProps,
  
 
} from '@chakra-ui/react'
import {
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,

} from 'react-icons/fi'
import { RxDashboard} from "react-icons/rx"
import {SlSupport} from "react-icons/sl"
import IconType from "react-icons"






type IconType=any
interface LinkItemProps {
  name: string
  icon: IconType
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: RxDashboard },
  { name: 'Pateint', icon: FiTrendingUp },
  { name: 'Appointment', icon: FiCompass },
  { name: 'Billing', icon: FiStar },
  { name: 'Support', icon: SlSupport },
  { name: 'Settings', icon: FiSettings },
]
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}





 export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box 
    color={"white"}
      transition="3s ease"
      bg={useColorModeValue('blue', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color={"white"}>
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}