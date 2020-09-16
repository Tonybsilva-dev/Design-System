import React from 'react';
import {  Button, useDisclosure, Drawer, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Input } from '@chakra-ui/core'


export default function Search() {
  const { isOpen, onOpen, onClose, } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button color="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}