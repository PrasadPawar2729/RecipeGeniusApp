import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack, Heading, Divider, ButtonGroup, Button, Image, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import "../styles/Section.css";

export const Sections = () => {
  return (
    <Tabs isFitted variant='enclosed' id="tabs">

      <TabList mb='1em'>
        <Tab id="tabcat1" style={{fontSize:"20px",fontWeight:"600"}} > Quick and Easy recipes </Tab>
        <Tab id="tabcat2" style={{fontSize:"20px",fontWeight:"600"}} > Vegetarian </Tab>
        <Tab id="tabcat3" style={{fontSize:"20px",fontWeight:"600"}} > Soups </Tab>
      </TabList>

      <TabPanels id="tabpan">

        <TabPanel className='tabsect'>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://www.tasteofhome.com/wp-content/uploads/2020/05/Vegetarian-Skillet-Lasagna_EXPS_FT20_251149_F_0221_1.jpg?fit=700,700'
                alt='Vegetarian Skillet Lasagna'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Vegetarian Skillet Lasagna</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardBody>
              <Image
                src=' https://www.tasteofhome.com/wp-content/uploads/2021/08/One-Pot-Black-Bean-Enchilada-Pasta_EXPS_LDDDM24_206844_DR_01_25_2b.jpg?fit=700,700'
                alt='One-Pot Enchilada Pasta'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>One-Pot Enchilada Pasta</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://www.tasteofhome.com/wp-content/uploads/2018/04/Spinach-Pizza-Quesadillas_EXPS_THCA22_162134_DR_12_07_2b.jpg?fit=700,700 '
                alt='Spinach Pizza Quesadillas'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Spinach Pizza Quesadillas</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://www.tasteofhome.com/wp-content/uploads/2018/08/Easy-Moroccan-Chickpea-Stew_EXPS_SDON18_59098_B06_15_1b-5.jpg?fit=700,700 '
                alt='Easy Moroccan Chickpea Stew'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Easy Moroccan Chickpea Stew</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </TabPanel>

        <TabPanel className='tabsect'>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src=' https://www.tasteofhome.com/wp-content/uploads/0001/01/Slow-Cooked-Stuffed-Peppers_EXPS_SSCBZ18_46113-_E08_28_7b_basedon.jpg?fit=700,700'
                alt='Pressure-Cooker Stuffed Peppers'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Pressure-Cooker Stuffed Peppers</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://www.tasteofhome.com/wp-content/uploads/2020/05/Vegetarian-Skillet-Enchiladas_EXPS_FT20_251146_F_0221_1.jpg?fit=700,700 '
                alt='Vegetarian Skillet Enchiladas'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Vegetarian Skillet Enchiladas</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://www.tasteofhome.com/wp-content/uploads/2018/01/Pinto-Bean-Zucchini-Boats_EXPS_DODBZ20_25604_E07_21_11b.jpg?fit=700,700 '
                alt='Pinto Bean Zucchini Boats'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Pinto Bean Zucchini Boats</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardBody>
              <Image
                src=' https://www.tasteofhome.com/wp-content/uploads/2020/12/Grilled-Chickpea-Salad-Sandwich_EXPS_RC20_254820_B09_15_6b.jpg?fit=700,700'
                alt='Grilled Chickpea Salad Sandwich'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Grilled Chickpea Salad Sandwich</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </TabPanel>

        <TabPanel className='tabsect'>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src=' https://www.tasteofhome.com/wp-content/uploads/2018/01/exps1923_CW2034C35.jpg?resize=295%2C295'
                alt='Taco Soup'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Taco Soup</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://www.tasteofhome.com/wp-content/uploads/2024/05/Creamy-Tortellini-Soup-_EXPS_TOHcom23_272937_P2_MD_06_21_6b.jpg?resize=295%2C295 '
                alt='Creamy Tortellini Soup'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Creamy Tortellini Soup</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://www.tasteofhome.com/wp-content/uploads/2024/02/Vegan-Potato-Soup_EXPS_TOHcom23_271857_DR_02_03_7b.jpg?resize=295%2C295https://www.tasteofhome.com/wp-content/uploads/2019/12/how-to-make-vegan-ramen-18-Alexandra-Shytsman-for-TOH.jpg?fit=700,700'
                alt='Vegan Ramen'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Vegan Ramen</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://www.tasteofhome.com/wp-content/uploads/2024/02/Copycat-Panera-Tomato-Soup-_EXPS_TOHcomDC23_272996_P2_MD_05_24_6b.jpg?resize=295%2C295 '
                alt='Copycat Panera Tomato Soup'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Copycat Panera Tomato Soup</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Recipe
                </Button>

                <Button variant='ghost' colorScheme='blue' border="1px solid">
                  Ingredients
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </TabPanel>

      </TabPanels>

    </Tabs>
  )
}
