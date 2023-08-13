import React, { useEffect, useState } from 'react'
import "../Biilingpage.module.css"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card, CardHeader, Heading, Button, SimpleGrid, Divider, Box, CardBody, Image, Stack, CardFooter, Text
} from '@chakra-ui/react'

const Biilingpage = () => {

const [tasks,SetTaks]=useState([]);

const makeAPICall = async () => {
  try {
    const response = await fetch('http://localhost:8080/posts', {mode:'cors'});
    const data = await response.json();
   //console.log({ data })
   SetTaks(data)
  }
  catch (e) {
    console.log(e)
  }
}
useEffect(() => {
  makeAPICall();
}, [])


  return (
  <>
     
     <div>
     <div style={{ display: 'grid', gridTemplateColumns: "repeat(2,1fr)", gridTemplateRows: "repeat(1,fr", height: "100px", gap: "0px" }}>
             <div >
               <Card border={"2px solid red"} marginTop={"5px"} maxHeight={"120px"} width={"250px"} marginLeft={"370px"}
                 direction={{ base: 'column', sm: 'row' }}
                 overflow='hidden'
                 variant='outline'
               >
                 <Image
                   objectFit='cover'
                   maxW={{ base: '100%', sm: '100px' }}
                   src='https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=740&t=st=1691847699~exp=1691848299~hmac=7dc6b92871e3a2c0d92857cf373bea071773f879bdca1e4b3dbdcf0769345795'
                   alt='Caffe Latte'
                 />
                 <Stack>
                   <CardBody >
     
                     <Text marginTop={"-10px"} >
                    sachin s
                     </Text>
                     <Text>
                       22, male
                     </Text>
                     <Text >
                       <span> Bill No</span> 12345
                     </Text>
                     <Button variant='solid' colorScheme='blue' height={"15px"}>
                       View details
                     </Button>
                   </CardBody>
     
     
                 </Stack>
               </Card>   <Card border={"2px solid red"} marginTop={"5px"} maxHeight={"120px"} width={"250px"} marginLeft={"370px"}
                 direction={{ base: 'column', sm: 'row' }}
                 overflow='hidden'
                 variant='outline'
               >
                 <Image
                   objectFit='cover'
                   maxW={{ base: '100%', sm: '100px' }}
                   src='https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=740&t=st=1691847699~exp=1691848299~hmac=7dc6b92871e3a2c0d92857cf373bea071773f879bdca1e4b3dbdcf0769345795'
                   alt='Caffe Latte'
                 />
                 <Stack>
                   <CardBody >
     
                     <Text marginTop={"-10px"} >
                       sachin s s
                     </Text>
                     <Text>
                       22, male
                     </Text>
                     <Text >
                       <span> Bill No</span> 12345
                     </Text>
                     <Button variant='solid' colorScheme='blue' height={"15px"}>
                       View details
                     </Button>
                   </CardBody>
     
     
                 </Stack>
               </Card>   <Card border={"2px solid red"} marginTop={"5px"} maxHeight={"120px"} width={"250px"} marginLeft={"370px"}
                 direction={{ base: 'column', sm: 'row' }}
                 overflow='hidden'
                 variant='outline'
               >
                 <Image
                   objectFit='cover'
                   maxW={{ base: '100%', sm: '100px' }}
                   src='https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=740&t=st=1691847699~exp=1691848299~hmac=7dc6b92871e3a2c0d92857cf373bea071773f879bdca1e4b3dbdcf0769345795'
                   alt='Caffe Latte'
                 />
                 <Stack>
                   <CardBody >
     
                     <Text marginTop={"-10px"} >
                       sachin s s
                     </Text>
                     <Text>
                       22, male
                     </Text>
                     <Text >
                       <span> Bill No</span> 12345
                     </Text>
                     <Button variant='solid' colorScheme='blue' height={"15px"}>
                       View details
                     </Button>
                   </CardBody>
     
     
                 </Stack>
               </Card>
     
               <Card border={"2px solid red"} marginTop={"5px"} maxHeight={"120px"} width={"250px"} marginLeft={"370px"}
                 direction={{ base: 'column', sm: 'row' }}
                 overflow='hidden'
                 variant='outline'
               >
                 <Image
                   objectFit='cover'
                   maxW={{ base: '100%', sm: '100px' }}
                   src='https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=740&t=st=1691847699~exp=1691848299~hmac=7dc6b92871e3a2c0d92857cf373bea071773f879bdca1e4b3dbdcf0769345795'
                   alt='Caffe Latte'
                 />
                 <Stack>
                   <CardBody >
     
                     <Text marginTop={"-10px"} >
                       sachin s s
                     </Text>
                     <Text>
                       22, male
                     </Text>
                     <Text >
                       <span> Bill No</span> 12345
                     </Text>
                     <Button variant='solid' colorScheme='blue' height={"15px"}>
                       View details
                     </Button>
                   </CardBody>
     
     
                 </Stack>
               </Card>
               <Card border={"2px solid red"} marginTop={"5px"} maxHeight={"120px"} width={"250px"} marginLeft={"370px"}
                 direction={{ base: 'column', sm: 'row' }}
                 overflow='hidden'
                 variant='outline'
               >
                 <Image
                   objectFit='cover'
                   maxW={{ base: '100%', sm: '100px' }}
                   src='https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=740&t=st=1691847699~exp=1691848299~hmac=7dc6b92871e3a2c0d92857cf373bea071773f879bdca1e4b3dbdcf0769345795'
                   alt='Caffe Latte'
                 />
                 <Stack>
                   <CardBody >
     
                     <Text marginTop={"-10px"} >
                       sachin s s
                     </Text>
                     <Text>
                       22, male
                     </Text>
                     <Text >
                       <span> Bill No</span> 12345
                     </Text>
                     <Button variant='solid' colorScheme='blue' height={"15px"}>
                       View details
                     </Button>
                   </CardBody>
     
     
                 </Stack>
               </Card>
             </div>
     
             <div >
               <TableContainer justifyContent={"center"} alignItems={"center"} fontSize={"15px"}
                 border="1px solid blue" height={"620px"} borderRadius={"10px"} margin={"auto"} width={["20%", "40%", "55%", "100%"]} overflow={"none"} textColor={"black"} >
     
                 <SimpleGrid columns={[2, 2, 2]} padding={"10px"}
                   display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                   <Heading size='md'>Billing Details</Heading>
                   <Button borderRadius={"20px"} bg='rgb(49,46,129)' color={"white"}>Print Bill</Button>
                 </SimpleGrid>
     
     
                 <Table width={"100%"} bg={"#f3f3f3"} >
                   <Thead >
                     <Tr>
                       <Th>Patient name</Th>
                       <Th>Age/Gender</Th>
                       <Th >Bill No</Th>
                       <Th >Date / Time</Th>
                       <Th >Receipt No</Th>
                     </Tr>
                   </Thead>
                   <Tbody>
                     <Tr>
                       <Td>sachin s</Td>
                       <Td>32 / Male </Td>
                       <Td>123456</Td>
                       <Td>12/05/2013, 6.63pm</Td>
                       <Td>5656423 </Td>
                     </Tr>
     
                   </Tbody>
     
                 </Table>
                 <Table gap={"0px"} marginTop={"5px"} textColor={"blackAlpha.900"}>
                   <Thead fontWeight={"bold"}>
                     <Tr >
                       <Th >Sr No</Th>
                       <Th >Service Name</Th>
                       <Th >Price </Th>
                       <Th  >Quantity</Th>
                       <Th  >Amount</Th>
     
                     </Tr>
                   </Thead>
                   <Tbody>
                     <Tr>
                       <Td>1</Td>
                       <Td>sachinnnnnn </Td>
                       <Td>123</Td>
                       <Td>12</Td>
                       <Td>5656423</Td>
                     </Tr>
                     <Tr>
                       <Td>2</Td>
                       <Td>sachinnnnnn </Td>
                       <Td>123</Td>
                       <Td>12</Td>
                       <Td>5656423</Td>
                     </Tr>
     
                   </Tbody>
     
     
     
                 </Table >
                 <Table marginTop={"100px"} height={"100px"} width={"100%"} bg={"#f3f3f3"} >
                   <Tbody>
                     <Tr marginTop={"0px"} padding={"0px"} display={"flex"} gap={"100px"} >
                       <Td fontWeight={"bold"}  >Mobile number</Td>
                       <Td marginLeft={"250px"}>9986909579</Td>
                     </Tr>
                     <Tr marginTop={"0px"}>
                       <Td fontWeight={"bold"}>Tax</Td>
                       <Td>200</Td>
                     </Tr>
                     <Tr>
                       <Td fontWeight={"bold"}>Discount</Td>
                       <Td>50</Td>
                     </Tr>
                     <Divider bg={"black"} width={"100%"} h={"2px"} />
                     <Tr>
                       <Td fontWeight={"bold"}>Total</Td>
                       <Td>1500</Td>
                     </Tr>
                   </Tbody>
                 </Table>
               </TableContainer>
     
             </div>
           </div>
             </div>
     
     
    
      
      </>
  )
}

export default Biilingpage