import React from 'react'
import { Input } from '@chakra-ui/react'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react'
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons'
const Navbar = () => {

    const { isOpen, onToggle } = useDisclosure()


  return (
  
      <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <img src="data:image/png;base64,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" 
             width={"70px"}
            />
          </Text>
   
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            
            <DesktopNav />
          </Flex>
        </Flex>
  
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'/login'}>
            Sign In
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'/signup'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
 

  )
}


const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                 >
                  {navItem.label}
                </Box>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    )
  }
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Box
        as="a"
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    )
  }
  
  const MobileNav = () => {
    return (
      <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    )
  }
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Box
          py={2}
          as="a"
          href={href ?? '#'}
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: 'none',
          }}>
          <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Box>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Box as="a" key={child.label} py={2} href={child.href}>
                  {child.label}
                </Box>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    )
  }

  
  const NAV_ITEMS = [
    {
      label: 'Home',
     href: '#'
    },
    {
      label: 'About',
     href: '#'
    },
    {
      label: 'Contact Us',
      href: '#',
    },
  ]

export default Navbar