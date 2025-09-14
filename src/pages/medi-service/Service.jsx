import React from "react";
import Cover from "../../Components/Cover";
import Contract from "../../Components/Contract";
import useMedicine from "../../Hooks/useMedicine";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ServiceTab from "./ServiceTab";
import { Helmet } from "react-helmet-async";

const Service = () => {

  const [medicine] = useMedicine();
 
  const painRelief = medicine.filter(item => item.category === 'Pain Relief');
  const antibiotic = medicine.filter(item => item.category === 'Antibiotic');
   const allergy = medicine.filter(item => item.category === 'Allergy');
   const gastric = medicine.filter(item => item.category === 'Gastric');
   const Diabetes = medicine.filter(item => item.category === 'Diabetes');

 console.log('Diabetes' , Diabetes)
  return (
    <div>
      <Helmet>
        <title>DocHouse || medicine&Service</title>
      </Helmet>
      <Cover></Cover>
 

     
      <Tabs className='py-4'>
        <TabList className='font-bold text-green-500 text-center'>
          <Tab>PainRelief</Tab>
          <Tab>Antibiotic</Tab>
          <Tab>Allergy</Tab>
          <Tab>Gastric</Tab>
          <Tab>Diabetes</Tab>
        </TabList>

        <TabPanel>
         <ServiceTab items={painRelief}></ServiceTab>
        </TabPanel>
        <TabPanel>
           <ServiceTab items={antibiotic}></ServiceTab>
        </TabPanel>
        <TabPanel>
          <ServiceTab items={allergy}></ServiceTab>
        </TabPanel>
        <TabPanel>
          <ServiceTab items={gastric}></ServiceTab>
        </TabPanel>
        <TabPanel>
           <ServiceTab items={Diabetes}></ServiceTab>
        </TabPanel>
      </Tabs>

           <Contract></Contract>
    </div>
  );
};

export default Service;
