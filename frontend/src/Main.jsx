import React from 'react';
import{Box,Stack,Image,Button,Text} from "@chakra-ui/react";
import axios from "axios";

const amount =50; // yaha galti ho sakti hai


const Home = () => {

  const checkoutHandler = async(amount)=>{
  const {data:{key}}=await axios.get("http://localhost:4000/api/getkey")
    
const {data:{order}} =await axios.post("http://localhost:4000/api/checkout",{
  amount
})
const options = {
  key, 
  amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: "INR",
  name: "Parth",
  description: "Donate for NGO",
  image: "https://images.inuth.com/2017/12/2Shahid-Kapoor-is-hot-in-every-look-he-carries.",
  order_id: order.id, 
  callback_url: "http://localhost:4000/api/paymentverification",
  prefill: {
      name: "Parth Bhawsar",
      email: "kingparthbhawsar@gmail.com",
      contact: "9000090000"
  },
  notes: {
      "address": "Razorpay Corporate Office"
  },
  theme: {
      "color": "#3399cc"
  }
};
const razor = new window.Razorpay(options);
 razor.open();
}
  
  return (
    	<Box>
	  <Stack display={"flex"} alignContent={"center"} justifyContent={"center"} direction={["column","row"]}>
	    
	    <Image w={"100vw"} src={'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} helodhfkhsdfhsdhdkhdkghkdhgdkhgkdhgkdhgkdhgkdhgkdfh />
	    
	    <Text w={"100vw"} h={"110vh"} display={"inline"} textAlign={"center"} alignContent={"center"} backgroundColor={"black"} color={"white"}  >  hello i am parth i running a ngo which helps needy people so please donate 1 dollar by clicking on button
      <Button w={"50%"} onClick={()=>checkoutHandler(amount)} margin={"20%"} backgroundColor={"white"} textColor={"black"}>Donate 	{"\u20A8"}{amount}</Button>
      </Text>
	   
	  </Stack>
	</Box>

)
}

export default Home
