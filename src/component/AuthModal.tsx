import {
  Box,
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuth } from '../api/github';
import { setAuthToken } from '../reducer/ghAPIReducer';

export const AuthModal = () => {
  const dispatch = useDispatch();
  const authToken = useSelector((state: any) => state.ghAPIReducer.authToken);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState<string>('');
  const [status, setStatus] = useState<number>(0);

  const checkInput = async () => {
    const data = await getUserAuth(input);
    if (data === 'Nelfunction') {
      setStatus(1);
      dispatch(setAuthToken(input));
    } else {
      setStatus(2);
    }
  };

  const onCloseModal = () => {
    setInput('');
    setStatus(0);
  };

  return (
    <>
      <Box onClick={onOpen}>⚙️</Box>
      <Modal isOpen={isOpen} onClose={onClose} onCloseComplete={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>인증</ModalHeader>
          <ModalCloseButton />

          {authToken ? (
            <>
              <ModalBody>
                <Center>인증 완료</Center>
                <Center>
                  <Button colorScheme="red" onClick={() => dispatch(setAuthToken(''))}>
                    재설정
                  </Button>
                </Center>
              </ModalBody>
              <ModalFooter />
            </>
          ) : (
            <>
              <ModalBody>
                {status == 2 && <Box>인증 실패</Box>}
                <Input type="password" value={input} onChange={e => setInput(e.target.value)} />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" onClick={checkInput}>
                  입력
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
